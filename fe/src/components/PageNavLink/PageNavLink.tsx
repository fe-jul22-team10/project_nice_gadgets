import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  text: string;
  to: string;
  end?: boolean | undefined;
};

export const PageNavLink: React.FC<Props> = ({ text, to, end }) => (
  <NavLink
    className={({ isActive }) =>
      // Instead default class past your header nav item class
      // Instead hover class past your class for hover line
      classNames('default', { hover: isActive })
    }
    to={to}
    end={end}
  >
    {text}
  </NavLink>
);
