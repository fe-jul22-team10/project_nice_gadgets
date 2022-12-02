import React, { useContext, useEffect } from 'react';
import './ProductCard.scss';
import { Card } from '../../types/Card';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import { AddToFavouritesButton } from '../Buttons/AddToFavouritesButton';
import StateContext from '../../components/Context/Context';

type Props = {
  phone: Card;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    itemId,
    name,
    image,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
  } = phone;
  const {
    favouriteItems,
    setFavouriteItems,
    cartItems,
    setCartItems,
  } = useContext(StateContext);

  useEffect(() => {
    localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));
  }, [favouriteItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToFavorite = () => {
    setFavouriteItems((prev) => [...prev, phone]);
  };

  const handleRemoveFromFavorite = () => {
    localStorage.setItem(
      'favouriteItems',
      JSON.stringify(favouriteItems.filter(item => item.itemId !== itemId)),
    );

    setFavouriteItems((prevItems) => {
      return prevItems.filter(prevItem => prevItem.itemId !== itemId);
    });
  };

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, phone]);
  };

  const handleRemoveFromCart = () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter(item => item.itemId !== itemId)),
    );

    setCartItems((prevItems) => {
      return prevItems.filter(prevItems => prevItems.itemId !== itemId);
    });
  };

  return (
    <div className="card">
      <div className="card__container">
        <img
          src={`https://project-nice-gadgets.onrender.com/${image}`}
          alt={itemId}
          className="card__img"
        />
        <h2 className="card__title">{name}</h2>
        <div className="card__price">
          <p className="card__price-discount">${price}</p>
          <s className="card__price-fullPrice">${fullPrice}</s>
          <div className="card__price-line"></div>
        </div>
        <div className="card__specification">
          <div className="card__specification-wrapper">
            <div className="card__specification-part">Screen</div>
            <div className="card__specification-value">{screen}</div>
          </div>
          <div className="card__specification-wrapper">
            <div className="card__specification-part">Capacity</div>
            <div className="card__specification-value">{capacity}</div>
          </div>
          <div className="card__specification-wrapper">
            <div className="card__specification-part">RAM</div>
            <div className="card__specification-value">{ram}</div>
          </div>
        </div>
        <div className="card__buttons">
          <AddToCartButton
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
            phone={phone}
            cartItems={cartItems}
          />
          <AddToFavouritesButton
            onAdd={handleAddToFavorite}
            onRemove={handleRemoveFromFavorite}
            phone={phone}
            favouriteItems={favouriteItems}
          />
        </div>
      </div>
    </div>
  );
};
