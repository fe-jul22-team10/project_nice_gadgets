import React, { useState } from 'react';
import classNames from 'classnames';
import './AddToCartButton.scss';

export const AddToCartButton: React.FC = () => {
  const [addedToCart, setAddedToCart] = useState(false);

  const hadleAddToCart = () => {
    setAddedToCart((prevState) => !prevState);
  };

  return (
    <button
      type="button"
      className={classNames('card__buttons-cart', {
        'card__buttons-cart--selected': addedToCart,
      })}
      onClick={hadleAddToCart}
    >
      Add to cart
    </button>
  );
};
