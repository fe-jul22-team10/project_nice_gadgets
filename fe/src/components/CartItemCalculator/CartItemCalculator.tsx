import React from 'react';

import './cart-item-calculator.scss';

// import CartItemCalculatorStyles from './cart-item-calculator.module.scss';

export const CartItemCalculator: React.FC = () => {
  return (
    <div className="cartItem-calculator">
      <h2 className="cartItem-calculator__price">$2657</h2>
      <p className="cartItem-calculator__all-products">Total for 3 items</p>
      <span className="cartItem-calculator__separator"></span>
      <a href="#" className="cartItem-calculator__btn">
        Checkout
      </a>
    </div>
  );
};
