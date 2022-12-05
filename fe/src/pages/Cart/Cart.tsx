import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="phones" className="cart-back-block">
          <div className="cart-breadcrumbs__arrow"></div>
          <p className="cart-breadcrumbs__text">Back</p>
        </Link>
      </div>
      <div className='cart'>
        {items.length > 0 ? (
          <>
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
          </div></>
        ) : (
          <h1 className="cart__subtitle">Your cart is empty</h1>
        )}
      </div>

    </div>
  );
};
