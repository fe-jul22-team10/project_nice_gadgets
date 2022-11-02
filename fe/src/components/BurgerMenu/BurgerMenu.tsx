import React, { useState } from 'react';

import classNames from 'classnames';

import heartLike from '../../assets/images/icons/favourite.svg';
import logo from '../../assets/images/icons/logo.svg';
import cross from '../../assets/images/icons/close.svg';
import bag from '../../assets/images/icons/bag.svg';

import { Link, NavLink } from 'react-router-dom';

import './burger-menu.scss';

export const BurgerMenu: React.FC = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const changeBurgerState = () => {
    setShowBurgerMenu(true);
  };

  return (
    <header
      className={classNames('burger-menu', {
        'hide-burger-menu': showBurgerMenu,
      })}
    >
      <div className="burger-menu__wrap">
        <div className="burger-menu__logo">
          <a href="#">
            <img src={logo} alt="nice-gadgets" />
          </a>
        </div>
        <div className="burger-menu__cross">
          <a href="#" className="burger-menu__link" onClick={changeBurgerState}>
            <img src={cross} alt="cross" />
          </a>
        </div>
      </div>

      <ul className="burger-menu__list">
        <li className="burger-menu__item">
          <Link to="/home">Home</Link>
        </li>

        <li className="burger-menu__item">
          <Link to="/phones">Phones</Link>
        </li>

        <li className="burger-menu__item">
          <Link to="/tablets">Tablets</Link>
        </li>

        <li className="burger-menu__item">
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
      <div className="burger-menu__tabs">
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            classNames('burger-menu__btn', {
              'is-active': isActive,
            })
          }
        >
          <img src={heartLike} alt="heart" />
        </NavLink>
        <NavLink
          to="/cart-item"
          className={({ isActive }) =>
            classNames('burger-menu__btn', {
              'is-active': isActive,
            })
          }
        >
          <img src={bag} alt="bag" />
        </NavLink>
      </div>
    </header>
  );
};
