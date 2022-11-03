import React from 'react';
import './Header.scss';
import { Logo } from '../Logo';

import { Link } from 'react-router-dom';

import heart from '../../assets/images/icons/heart.svg';
import bag from '../../assets/images/icons/bag.svg';
import union from '../../assets/images/icons/union.svg';
import { Navigation } from '../Navigation';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      <div className="header__icon">
        <div className="icon-box">
          <img src={heart} alt="like" className="icon" />
        </div>
        <div className="icon-box">
          <Link to="/cart">
            <img src={bag} alt="bag" className="icon" />
          </Link>
        </div>
        <div className="icon-box icon-box__menu">
          <img src={union} alt="shop" className="union" />
        </div>
      </div>
    </header>
  );
};
