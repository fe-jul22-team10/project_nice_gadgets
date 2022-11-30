import React, { useContext } from 'react';
import { Card } from '../../types/Card';
import StateContext from '../../components/Context/Context';
import classNames from 'classnames';

import grayCross from '../../assets/images/icons/grayClose.svg';
import plus from '../../assets/images/icons/plus.svg';

import './cart-item.scss';

type Props = {
  phone: Card,
};

export const CartItem: React.FC<Props> = ({ phone }) => {
  const { image, name, price } = phone;
  const { cartItems, setCartItems } = useContext(StateContext);

  if (phone.amount === undefined || phone.amount === null) {
    phone.amount = 1;
  }

  const decreaseCounter = (phone: Card) => {
    phone.amount--;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItems((prevItems) => [...prevItems]);
  };

  const increaseCounter = (phone: Card) => {
    phone.amount++;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItems((prevItems) => [...prevItems]);
  };

  const handleRemoveCartItem = () => {
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter(item => item.id !== phone.id)),
    );

    setCartItems((prevItems) => {
      return prevItems.filter(prevItem => prevItem.id !== phone.id);
    });
  };

  return (
    <div className="cart-item">
      <div className="cart-item__top">
        <div className="cart-item__close" onClick={handleRemoveCartItem}>
          <img src={grayCross} alt="grayCross" />
        </div>
        <div>
          <img
            src={`https://project-nice-gadgets.herokuapp.com/${image}`}
            alt="phone"
            className="cart-item__img"
          />
        </div>
        <h3 className="cart-item__model-name">{name}</h3>
      </div>
      <div className="cart-item__bottom">
        <div className="cart-item__counter">
          <button
            className={classNames('cart-item__decrease-btn', {
              'cart-item__decrease-btn--active': phone.amount > 1,
            })}
            onClick={() => decreaseCounter(phone)}
            disabled={phone.amount <= 1}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.66602 7.99998C2.66602
                  7.63179 2.96449 7.33331 3.33268
                  7.33331H12.666C13.0342 7.33331 13.3327
                  7.63179 13.3327 7.99998C13.3327 8.36817
                  13.0342 8.66665 12.666 8.66665H3.33268C2.96449
                  8.66665 2.66602 8.36817 2.66602 7.99998Z"
                fill={classNames({
                  '#e2e6e9': phone.amount === 1,
                  '#0F0F11': phone.amount > 1,
                })}
              />
            </svg>
          </button>
          <div className="cart-item__amount">{phone.amount}</div>
          <button
            className="cart-item__increase-btn"
            onClick={() => increaseCounter(phone)}
          >
            <img src={plus} alt="plus" />
          </button>
        </div>
        <span className="cart-item__price">${price}</span>
      </div>
    </div>
  );
};
