import React from 'react';

import { CartItem } from '../../components/CartItem';
import { CartItemCalculator } from '../../components/CartItemCalculator';
import { Card } from '../../types/Card';

import './Cart.scss';

type Props = {
  items: Card[],
};

export const Cart: React.FC<Props> = ({ items }) => {
  return (
    <div className="container">
      <div className="cart-breadcrumbs">
        <span className="cart-breadcrumbs__arrow"></span>
        <p className="cart-breadcrumbs__text">Back</p>
      </div>
      <div className='cart'>
      <h1 className='cart__title'>Cart</h1>
      <div className="cart__wrap">
        <div className="cart__items">
          {items.map((item) => {
            return (
              <CartItem
                phone={item}
                key={item.id}
              />
            );
          })}
        </div>

        {items.length > 0 && <CartItemCalculator phones={items} />}
      </div>
      </div>

    </div>
  );
};
