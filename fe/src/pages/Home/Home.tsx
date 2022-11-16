import React from 'react';
import { Banner } from '../../components/Banner';


import './Home.scss';

export const Home = () => {
  return (
    <div className="homepage">
      <div className="container">
        <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
        <Banner />
      </div>
    </div>
  );
};
