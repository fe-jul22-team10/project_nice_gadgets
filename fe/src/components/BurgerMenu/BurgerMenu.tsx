import React, { useState, useEffect } from 'react';

import classNames from 'classnames';

import heartLike from '../../assets/images/icons/favourite.svg';
import cross from '../../assets/images/icons/close.svg';
import bag from '../../assets/images/icons/bag.svg';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../Logo';

import './burger-menu.scss';

type Props = {
  showBurger: boolean;
  setShowBurger: (boolean: boolean) => void;
};

export const BurgerMenu: React.FC<Props> = ({ showBurger, setShowBurger }) => {
  const [hideBurgerMenu, setHideBurgerMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowBurger(false);
  }, [location.key]);

  const changeBurgerState = (hideBurgerMenu: boolean) => {
    setHideBurgerMenu(!hideBurgerMenu);
    setShowBurger(!showBurger);
  };

  return (
    <div
      className={classNames('burger-menu', {
        'hide-burger-menu': hideBurgerMenu,
        'show-burger': showBurger,
        'border-right': !showBurger,
      })}
    >
      <div className="burger-menu__wrap">
        <div className="burger-menu__logo">
          <Logo />
        </div>
        <div className="burger-menu__cross">
          <span
            className="burger-menu__switcher"
            onClick={() => changeBurgerState(hideBurgerMenu)}
          >
            <img src={cross} alt="cross" />
          </span>
        </div>
      </div>

      <ul className="burger-menu__list">
        <li className="burger-menu__item">
          <Link to="/">Home</Link>
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
              'is-active-tab': isActive,
            })
          }
        >
          <img src={heartLike} alt="heart" />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            classNames('burger-menu__btn', {
              'is-active-tab': isActive,
            })
          }
        >
          <img src={bag} alt="bag" />
        </NavLink>
      </div>
    </div>
  );
};
