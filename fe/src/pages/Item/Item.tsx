import React, { useEffect, useState } from 'react';
import { getPhones } from '../../api/phones';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Slider } from '../../components/Slider';
import { Card } from '../../types/Card';
import { ItemPage } from '../../types/ItemPage';

import './Item.scss';

type Props = {
  item: ItemPage | undefined,
}

export const Item: React.FC<Props> = ({ item }) => {
  const baseUrl = 'https://project-nice-gadgets.onrender.com/';
  const [youMayLike, setYouMayLike] = useState<Card[]>([]);

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

  return (
    <div className="container">
      <Breadcrumbs />
      <div className="back-block">
        <div className="back-block__img"></div>
        <p className="back-block__text">Back</p>
      </div>
      <h1 className="item-page-title">
        {item?.name}
      </h1>
      <div className="visual-block">
        <div className="visual-block__gallery gallery">
            <div className="gallery__wrapper wrapper wrapper--selected">
              {item ? (
                <img
                src={`${baseUrl}${item?.images[0]}`}
                alt="phone_icon_1"
                className="wrapper__img"
                />
              ) : (
                ''
              )}
            </div>
            <div className="gallery__wrapper wrapper">
              {item ? (
                <img
                  src={`${baseUrl}${item?.images[1]}`}
                  alt="phone_icon_1"
                  className="wrapper__img"
                />
              ) : (
                ''
              )}
            </div>
            <div className="gallery__wrapper wrapper">
              {item ? (
                <img
                src={`${baseUrl}${item?.images[2]}`}
                alt="phone_icon_1"
                className="wrapper__img"
                />
              ) : (
                ''
              )}
            </div>
            <div className="gallery__wrapper wrapper">
              {item ? (
                <img
                  src={`${baseUrl}${item?.images[3]}`}
                  alt="phone_icon_1"
                  className="wrapper__img"
                />
              ) : (
                ''
              )}
              </div>
            <div className="gallery__wrapper wrapper">
              {item ? (
                <img
                  src={`${baseUrl}${item?.images[4]}`}
                  alt="phone_icon_1"
                  className="wrapper__img"
                />
              ) : (
                ''
              )}
            </div>
        </div>
        <div className="visual-block__poster poster">
          {item ? (
            <img
              src={`${baseUrl}${item?.images[0]}`}
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
            <div
              className="color-switch__border color-switch__border--selected">
              <div className="color-switch__color1"></div>
            </div>
            <div className="color-switch__border">
              <div className="color-switch__color2"></div>
            </div>
            <div className="color-switch__border">
              <div className="color-switch__color3"></div>
            </div>
            <div className="color-switch__border">
              <div className="color-switch__color4"></div>
            </div>
          </div>
          <div className="specification__line"></div>
          <div className="specification__capacity capacity">
            <div className="capacity__text">Select capacity</div>
            <div className="capacity__value value">
              <button className="value__button value__button--selected">
                64 GB
              </button>
              <button className="value__button">256 GB</button>
              <button className="value__button">512 GB</button>
            </div>
          </div>
          <div className="specification__line"></div>
          <div className="specification__price price">
            <span className="price__discount">${item?.priceDiscount}</span>
            <span className="price__full">${item?.priceRegular}</span>
          </div>
          <div className="specification__buttons buttons">
            <button className="buttons__cart">Add to cart</button>
            <button className="buttons__favourite"></button>
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
              <p className="feature__value">{item?.cell}</p>
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
    </div>
  );
};
