import React from 'react';
import { useLocation } from 'react-router-dom';

import { PageNavLink } from '../PageNavLink';
import { Search } from '../Search';

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav
      className="header__navbar"
      data-cy="nav"
      role="navigation"
      aria-label="Main navigation"
    >
      <PageNavLink to="/" text="Home" end />
      <PageNavLink to="/phones" text="Phones" />
      <PageNavLink to="/tablets" text="Tablets" />
      <PageNavLink to="/accessories" text="Accessories" />
      <>{location.pathname === '/phones' && <Search />}</>
    </nav>
  );
};
