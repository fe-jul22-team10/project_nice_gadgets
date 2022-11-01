import React from 'react';
import './Header.scss';
import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import heart from '../../assets/images/icons/heart.svg';
import bag from '../../assets/images/icons/bag.svg';
import Union from '../../assets/images/icons/Union.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header__navbar">
        <Navigation to="/home" text="Home" />
        <Navigation to="/phones" text="Phones" />
        <Navigation to="/tablets" text="Tablets" />
        <Navigation to="/accessories" text="Accessories" />
      </nav>
      <div className="header__icon">
        <div className="icon-box">
          <img src={heart} alt="like" className="icon" />
        </div>
        <div className="icon-box">
          <img src={bag} alt="shop" className="icon" />
        </div>
        <div className="icon-box icon-box__menu">
          <img src={Union} alt="shop" className="union" />
        </div>
      </div>
    </header>
  );
};
