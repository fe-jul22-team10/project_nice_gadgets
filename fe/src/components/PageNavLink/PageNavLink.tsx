import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import './PageNavLink.scss';

type Props = {
  text: string;
  to: string;
  end?: boolean | undefined;
};

export const PageNavLink: React.FC<Props> = ({ text, to, end }) => (
  <NavLink
    className={({ isActive }) =>
      classNames('navbar-item', { 'is-active': isActive })
    }
    to={to}
    end={end}
  >
    {text}
  </NavLink>
);
