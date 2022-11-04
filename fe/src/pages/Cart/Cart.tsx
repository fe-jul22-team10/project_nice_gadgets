import React, { useState } from 'react';

import { CartItem } from '../../components/CartItem';
import { CartItemCalculator } from '../../components/CartItemCalculator';

// имитация сервера для CartItem
import phone from '../../assets/images/photos/cart-item/Phone.png';

import './Cart.scss';

const modelName = 'Apple iPhone 14 Pro 128GB Silver (MQ023)';

const price = '$999';

export const Cart = () => {
  const [removeCartItem, setRemoveCartItem] = useState(false);
  const lotsCartItems = [1, 2, 3];

  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="cart">
        <div className="cart__wrap">
          {!removeCartItem
            && lotsCartItems.map((index) => {
              return (
                <CartItem
                  key={index}
                  phone={phone}
                  modelName={modelName}
                  price={price}
                  setRemoveCartItem={setRemoveCartItem}
                />
              );
            })}
        </div>

        <CartItemCalculator />
      </div>
    </div>
  );
};
