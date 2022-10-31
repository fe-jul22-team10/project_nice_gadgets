// import { Card } from './types/Card';
import React, { useState } from 'react';
import classNames from 'classnames';
import './ProductCard.Catalog.scss';
import img from './image/image.jpg';

// type Props = {
//   card: Card,
// };

export const ProductCard: React.FC/* <Props> */ = (/* { card } */) => {
/*  const {
    id,
    nam,
    image,
    price,
    fullPrice,
    year,
    capacity,
    color,
  } = card;
 */
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const hadleAddToCart = () => {
    setAddedToCart(prevState => !prevState);
  };

  const hadleAddToFavorites = () => {
    setAddedToFavorites(prevState => !prevState);
  };

  return (
    <body className="page">
      <div className="page__card card">
        <div className="container">
          <img
            src={img}
            alt="card__img"
            className="card__img"
          />
          <h2 className="card__title">
            Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
          </h2>
          <div className="card__price">
            <p className="card__price-discount">
              $799
            </p>
            <s className="card__price-fullPrice">
              $899
            </s>
            <div className="card__price-line"></div>
          </div>
          <div className="card__specification">
            <div className="card__specification-wrapper">
              <div className="card__specification-part">
                Screen
              </div>
              <div className="card__specification-value">
                5.8” OLED
              </div>
            </div>
            <div className="card__specification-wrapper">
              <div className="card__specification-part">
                Capacity
              </div>
              <div className="card__specification-value">
                64 GB
              </div>
            </div>
            <div className="card__specification-wrapper">
              <div className="card__specification-part">
                RAM
              </div>
              <div className="card__specification-value">
                4 GB
              </div>
            </div>
          </div>
          <div className="card__buttons">
            {!addedToCart ? (
              <button
                type="button"
                className="card__buttons-cart"
                onClick={hadleAddToCart}
              >
                Add to cart
              </button>
            ) : (
              <button
                type="button"
                className="card__buttons-cart card__buttons-cart--selected"
                onClick={hadleAddToCart}
              >
                Added
              </button>
            )}
            <button
              type="button"
              className={classNames(
                'card__buttons-favorite',
                { 'card__buttons-favorite--selected': addedToFavorites },
              )}
              onClick={hadleAddToFavorites}
            >
            </button>
          </div>
        </div>
      </div>
    </body>
  );
};
