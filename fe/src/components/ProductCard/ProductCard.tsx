import React, { useCallback, useContext, useEffect } from 'react';
import './ProductCard.scss';
import { Card } from '../../types/Card';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import { AddToFavouritesButton } from '../Buttons/AddToFavouritesButton';
import StateContext from '../../components/Context/Context';
import { NavLink } from 'react-router-dom';

type Props = {
  phone: Card;
};

export const ProductCard: React.FC<Props> = ({ phone }) => {
  const {
    id,
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
    setPhoneId,
  } = useContext(StateContext);

  useEffect(() => {
    localStorage.setItem('favouriteItems', JSON.stringify(favouriteItems));

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [favouriteItems, cartItems]);

  const handleAddToFavorite = useCallback(() => {
    setFavouriteItems((prev) => [...prev, phone]);
  }, [favouriteItems]);

  const handleRemoveFromFavorite = useCallback(() => {
    localStorage.setItem(
      'favouriteItems',
      JSON.stringify(favouriteItems.filter(item => item.itemId !== itemId)),
    );

    setFavouriteItems((prevItems) => {
      return prevItems.filter(prevItem => prevItem.itemId !== itemId);
    });
  }, [favouriteItems]);

  const handleAddToCart = useCallback(() => {
    setCartItems((prev) => [...prev, phone]);
  }, [cartItems]);

  const handleRemoveFromCart = useCallback(() => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter(item => item.itemId !== itemId)),
    );

    setCartItems((prevItems) => {
      return prevItems.filter(prevItems => prevItems.itemId !== itemId);
    });
  }, [cartItems]);

  const handleSetItemId = useCallback((id: number) => {
    setPhoneId(id);

    localStorage.setItem('id', String(id));
  }, [id]);

  return (
    <div
      className="card"
      onClick={() => handleSetItemId(id)}
    >
      <div className="card__container">
        <NavLink to={`/phones/${itemId}`} className="navlink-card">
          <img
            src={`https://project-nice-gadgets.onrender.com/${image}`}
            alt={itemId}
            className="card__img"
          />
        </NavLink>
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
