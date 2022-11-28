import React from 'react';
import { Card } from '../../types/Card';

import './cart-item-calculator.scss';

type Props = {
  phones: Card[],
}

export const CartItemCalculator: React.FC<Props> = ({ phones }) => {
  const amount = phones.reduce((sum, x) => sum + x.price, 0);

  return (
    <div className="cartItem-calculator">
      <h2 className="cartItem-calculator__price">${amount}</h2>
      <p className="cartItem-calculator__all-products">
        Total for {phones.length} items
      </p>
      <span className="cartItem-calculator__separator"></span>
      <a href="#" className="cartItem-calculator__btn">
        Checkout
      </a>
    </div>
  );
};
