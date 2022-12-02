import React from 'react';
import { Card } from '../../../types/Card';
import './AddToCartButton.scss';

type Props = {
  onAdd: () => void,
  onRemove: () => void,
  phone: Card,
  cartItems: Card[],
}

export const AddToCartButton: React.FC<Props> = ({
  onAdd,
  onRemove,
  phone,
  cartItems,
}) => {
  const isInCart = cartItems.map(item => item.id).includes(phone.id);

  return (
    <>
      {!isInCart ? (
        <button
          type="button"
          className="card__buttons-cart"
          onClick={onAdd}
        >
          Add to cart
        </button>
      ) : (
        <button
          type="button"
          className="card__buttons-cart card__buttons-cart--selected"
          onClick={onRemove}
        >
          Added
        </button>
      )}
    </>
  );
};
