import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import StateContext from '../../components/Context/Context';

import { BurgerMenu } from '../BurgerMenu';
import { Navigation } from '../Navigation';
import { Logo } from '../Logo';

import './Header.scss';

import heart from '../../assets/images/icons/heart.svg';
import bag from '../../assets/images/icons/bag.svg';
import union from '../../assets/images/icons/union.svg';

type Props = {
  showBurger: boolean;
  setShowBurger: (boolean: boolean) => void;
};

export const Header: React.FC<Props> = ({ showBurger, setShowBurger }) => {
  const changeBurgerStatus = (boolean: boolean) => {
    setShowBurger(!boolean);
  };
  const { favouriteItems, cartItems } = useContext(StateContext);

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
        <Logo />
        <Navigation />
        <BurgerMenu showBurger={showBurger} setShowBurger={setShowBurger} />
        <div className="header__icon">
          <Link to="/favourites">
            <div className="icon-box">
              <img src={heart} alt="like" className="icon" />
              {!!favouriteItems.length
                && <div className="icon-box__favourite">
                  {favouriteItems.length}
                </div>}
            </div>
          </Link>
          <Link to="/cart">
            <div className="icon-box">
              <img src={bag} alt="bag" className="icon" />
              {!!cartItems.length && <div className="icon-box__cart">
                {cartItems.length}
              </div>}
            </div>
          </Link>
          <div
            className="icon-box icon-box__menu"
            onClick={() => changeBurgerStatus(showBurger)}
          >
            <img src={union} alt="shop" className="union" />
          </div>
        </div>
        </div>
      </header>
    </>
  );
};
