import React, { useState } from 'react';

import classNames from 'classnames';

import grayCross from '../../assets/images/icons/grayClose.svg';
import plus from '../../assets/images/icons/plus.svg';

import './cart-item.scss';

type Props = {
  phone: string;
  modelName: string;
  price: string;
  setRemoveCartItem: (close: boolean) => void;
};

export const CartItem: React.FC<Props> = ({
  phone,
  modelName,
  price,
  setRemoveCartItem,
}) => {
  const [count, setCount] = useState(1);

  const decreaseCounter = () => {
    setCount((num) => num - 1);
  };

  const increaseCounter = () => {
    setCount((num) => num + 1);
  };

  const removeCartItem = () => {
    setRemoveCartItem(true);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__top">
        <div className="cart-item__close" onClick={removeCartItem}>
          <img src={grayCross} alt="grayCross" />
        </div>
        <div className="cart-item__img">
          <img src={phone} alt="phone" />
        </div>
        <h3 className="cart-item__model-name">{modelName}</h3>
      </div>
      <div className="cart-item__bottom">
        <div className="cart-item__counter">
          <button
            className={classNames('cart-item__decrease-btn', {
              'cart-item__decrease-btn--active': count > 1,
            })}
            onClick={decreaseCounter}
            disabled={count <= 1}
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
                  '#e2e6e9': count === 1,
                  '#0F0F11': count > 1,
                })}
              />
            </svg>
          </button>
          <div className="cart-item__amount">{count}</div>
          <button className="cart-item__increase-btn" onClick={increaseCounter}>
            <img src={plus} alt="plus" />
          </button>
        </div>
        <span className="cart-item__price">{price}</span>
      </div>
    </div>
  );
};
