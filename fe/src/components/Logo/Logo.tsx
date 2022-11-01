import React from 'react';
import logo from '../../assets/images/icons/logo.svg';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
      <Link to="/home" className="logo">
        <img src={logo} alt="logo" className="logo" />
      </Link>
  );
};
