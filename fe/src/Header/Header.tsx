import React from 'react';
import '../styles/blocks/Header.scss';
import { Navigation } from './Navigation';
import Logo from '../icons/Logo.svg';
import heart from '../icons/heart.svg';
import bag from '../icons/bag.svg';
import Union from '../icons/Union.svg';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo" className="header__logo" />
      </div>
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
