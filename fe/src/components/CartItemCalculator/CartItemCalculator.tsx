import React, { useContext } from 'react';
import { Card } from '../../types/Card';
import { Notification } from '../../types/Notification';
import StateContext from '../../components/Context/Context';
import './cart-item-calculator.scss';
import { Link } from 'react-router-dom';
import { createNotification } from '../../helpers/CreateNotification';

type Props = {
  phones: Card[],
}

export const CartItemCalculator: React.FC<Props> = ({ phones }) => {
  const { setCartItems } = useContext(StateContext);
  const total = phones.reduce((sum, x) => sum + x.price * x.amount, 0);

  const handleCheckout = () => {
    setCartItems(() => []);

    localStorage.setItem(
      'cartItems',
      JSON.stringify('[]'),
    );
  };



  return (
    <div className="cartItem-calculator">
      <h2 className="cartItem-calculator__price">${total}</h2>
      <p className="cartItem-calculator__all-products">
        Total for {phones.length} items
      </p>
      <span className="cartItem-calculator__separator"></span>
      <Link to="/phones">
        <button
          className="cartItem-calculator__btn"
          onClick={() => createNotification(Notification.checkout)}
        >
          Checkout
        </button>
      </Link>
    </div>
  );
};
