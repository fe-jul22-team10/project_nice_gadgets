import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPhones } from '../../api/phones';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Slider } from '../../components/Slider';
import { Card } from '../../types/Card';
import { ItemPage } from '../../types/ItemPage';
import StateContext from '../../components/Context/Context';
import classNames from 'classnames';
import { getPhone } from '../../api/item';

import './Item.scss';
import {
  AddToFavouritesButton,
} from '../../components/Buttons/AddToFavouritesButton';
import { AddToCartButton } from '../../components/Buttons/AddToCartButton';
import { Loader } from '../../components/Loader';

type Props = {
  phoneId: number,
};

export const Item: React.FC<Props> = ({ phoneId }) => {
  const [youMayLike, setYouMayLike] = useState<Card[]>([]);
  const [selectedImage, setSelectedImage] = useState('00.jpg');
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedCapacity, setSelectedCapacity] = useState('64GB');
  const [item, setItem] = useState<ItemPage>();
  const baseUrl = 'https://project-nice-gadgets.onrender.com/';
  const {
    favouriteItems,
    setFavouriteItems,
    cartItems,
    setCartItems,
  } = useContext(StateContext);

  const phonesFromLocalStorage = JSON.parse(
    localStorage.getItem('phonesFromServer') || '[]',
  ) as Card[];
  const findPhone = phonesFromLocalStorage
    .filter(phone => phone.id === phoneId);
  const fetchId = findPhone[0].itemId;

  useEffect(() => {
    getPhone(fetchId)
      .then(res => setItem(res))
      .catch(() => {
        throw new Error('Something went wrong');
      });
  }, []);

  const handleAddToFavorite = () => {
    setFavouriteItems((prev) => [...prev, findPhone[0]]);
  };

  const handleRemoveFromFavorite = () => {
    localStorage.setItem(
      'favouriteItems',
      JSON.stringify(favouriteItems
        .filter(favourite => favourite.itemId !== findPhone[0].itemId)),
    );

    setFavouriteItems((prevItems) => {
      return prevItems
        .filter(prevItem => prevItem.itemId !== findPhone[0].itemId);
    });
  };

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, findPhone[0]]);
  };

  const handleRemoveFromCart = () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems
        .filter(cart => cart.itemId !== findPhone[0].itemId)),
    );

    setCartItems((prevItems) => {
      return prevItems
        .filter(prevItems => prevItems.itemId !== findPhone[0].itemId);
    });
  };

  useEffect(() => {
    getPhones({
      amount: '7',
      page: '1',
    })
      .then(result => setYouMayLike(result[1]))
      .catch(() => {
        throw new Error('Something went wrong');
      });
  }, []);

  const handleSelectImage = (image: string) => {
    const numberOfImage = image.slice(-6);

    return setSelectedImage(numberOfImage);
  };
  const handleSelectedColor = (color: string) => setSelectedColor(color);
  const handleSelectCapacity = (value: string) => setSelectedCapacity(value);

  return (
    <div className="container">
      <div className="back-block">
        <Link to="/home" className="link-breadcrumbs">
          <Breadcrumbs />
        </Link>
        <div className="back-block__arrow"></div>
        <Link to="/phones" className="link-breadcrumbs">
          <p className="back-block__link">Phones</p>
        </Link>
        <div className="back-block__arrow"></div>
        <p className="back-block__text">{item?.name}</p>
      </div>
      <div className="back-block">
      <Link to="/phones" className="link-breadcrumbs">
        <div className="back-block__img"></div>
        <p className="back-block__text">Back</p>
      </Link>
      </div>
      {!item ? (
        <Loader />
      ) : (
        <>
         <h1 className="item-page-title">
        {item?.name}
        </h1>
        <div className="visual-block">
          <div className="visual-block__gallery gallery">
            {item?.images.map(image => {
              const isSelected = image.slice(-6) === selectedImage;

              return (
                <div
                  className={classNames(
                    'gallery__wrapper wrapper',
                    { 'wrapper--selected': isSelected },
                  )}
                  key={Math.random()}
                >
                <img
                  src={`${baseUrl}${image}`}
                  alt={`img_${image.slice(-5, -4)}`}
                  className="wrapper__img"
                  onClick={() => handleSelectImage(image)}
                />
              </div>
              );
            })}
          </div>
          <div className="visual-block__poster poster">
            {item ? (
              <img
                src={`${baseUrl}${item?.images[0].slice(0, -6)}/${selectedImage}`}
                alt="main__img"
                className="poster__img"
              />
            ) : (
              ''
            )}
          </div>
          <div className="visual-block__specification specification">
            <div className="specification__identificator identificator">
              <p className="identificator__text">Available colors</p>
              <p className="identificator__id">ID: 802390</p>
            </div>
            <div className="specification__color-switch color-switch">
              {item?.colorsAvailable.map(color => {
                const isSelected = color === selectedColor;

                return (
                  <div
                    className={classNames(
                      'color-switch__border',
                      { 'color-switch__border--selected': isSelected },
                    )}
                    onClick={() => handleSelectedColor(color)}
                    key={Math.random()}
                  >
                    <div className={`color-switch__${color}`}></div>
                  </div>
                );
              })}
            </div>
            <div className="specification__line"></div>
            <div className="specification__capacity capacity">
              <div className="capacity__text">Select capacity</div>
              <div className="capacity__value value">
                {item?.capacityAvailable.map(value => {
                  const isSelected = value === selectedCapacity;

                  return (
                    <button
                      className={classNames(
                        'value__button',
                        { 'value__button--selected': isSelected },
                      )}
                      key={Math.random()}
                      onClick={() => handleSelectCapacity(value)}
                    >
                      {value}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="specification__line"></div>
            <div className="specification__price price">
              <span className="price__discount">${item?.priceDiscount}</span>
              <span className="price__full">${item?.priceRegular}</span>
            </div>
            <div className="specification__buttons buttons">
            <AddToCartButton
              onAdd={handleAddToCart}
              onRemove={handleRemoveFromCart}
              phone={findPhone[0]}
              cartItems={cartItems}
            />
            <AddToFavouritesButton
              onAdd={handleAddToFavorite}
              onRemove={handleRemoveFromFavorite}
              phone={findPhone[0]}
              favouriteItems={favouriteItems}
            />
            </div>
            <div className="specification__characteristics characteristics">
              <div className="characteristics__characteristic characteristic">
                <p className="characteristic__key">Screen</p>
                <p className="characteristic__value">{item?.screen}</p>
              </div>
              <div className="characteristics__characteristic characteristic">
                <p className="characteristic__key">Resolution</p>
                <p className="characteristic__value">{item?.resolution}</p>
              </div>
              <div className="characteristics__characteristic characteristic">
                <p className="characteristic__key">Processor</p>
                <p className="characteristic__value">{item?.processor}</p>
              </div>
              <div className="characteristics__characteristic characteristic">
                <p className="characteristic__key">RAM</p>
                <p className="characteristic__value">{item?.ram}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="description-block">
          <div className="description-block__about about">
            <h3 className="about__title">About</h3>
            <div className="about__line"></div>
            <div className="about__section section">
              <h4 className="section__title">{item?.description[0].title}</h4>
              <p className="section__text">{item?.description[0].text}</p>
            </div>
            <div className="about__section section">
              <h4 className="section__title">{item?.description[1].title}</h4>
              <p className="section__text">{item?.description[1].text}</p>
            </div>
            <div className="about__section section">
              <h4 className="section__title">{item?.description[2].title}</h4>
              <p className="section__text">{item?.description[2].text}</p>
            </div>
          </div>
          <div className="description-block__about about">
            <h3 className="about__title">Tech specs</h3>
            <div className="about__line"></div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">Screen</p>
                <p className="feature__value">{item?.screen}</p>
              </div>
            </div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">Resolution</p>
                <p className="feature__value">{item?.resolution}</p>
              </div>
            </div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">Processor</p>
                <p className="feature__value">{item?.processor}</p>
              </div>
            </div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">RAM</p>
                <p className="feature__value">{item?.ram}</p>
              </div>
            </div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">Built in memory</p>
                <p className="feature__value">{item?.capacity}</p>
              </div>
            </div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">Camera</p>
                <p className="feature__value">{item?.camera}</p>
              </div>
            </div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">Zoom</p>
                <p className="feature__value">{item?.zoom}</p>
              </div>
            </div>
            <div className="specs__features features">
              <div className="features__feature feature">
                <p className="feature__key">Cell</p>
                <p className="feature__value">{item?.cell.map(cell => `${cell} `)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage__title-block">
          <h2 className="homepage__subtitle">You may also like</h2>
          <div className="homepage__button-wrapper">
            <div className="homepage__button-prev"></div>
            <div className="homepage__button-next"></div>
          </div>
        </div>
        <Slider phones={youMayLike} />
        </>
      )}
    </div>
  );
};
