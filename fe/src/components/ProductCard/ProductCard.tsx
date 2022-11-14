import React from 'react';
import './ProductCard.scss';
import { Card } from '../../types/Card';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import { AddToFavoritesButton } from '../Buttons/AddToFavoritesButton';

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

  return (
    <div className="card">
      <div className="card__container">
        <img
          src={`https://project-nice-gadgets.herokuapp.com/${image}`}
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
          <AddToCartButton />
          <AddToFavoritesButton />
        </div>
      </div>
    </div>
  );
};
