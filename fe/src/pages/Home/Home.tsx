import React, { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { Loader } from '../../components/Loader';

import './Home.scss';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="homepage">
          <div className="container">
            <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
            <Banner />
          </div>
        </div>
      )}
    </div>
  );
};
