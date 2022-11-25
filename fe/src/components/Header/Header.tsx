import React from 'react';
import { Link } from 'react-router-dom';

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
            </div>
          </Link>
          <Link to="/cart">
            <div className="icon-box">
              <img src={bag} alt="bag" className="icon" />
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
