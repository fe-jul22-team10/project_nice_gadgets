import React, { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { Loader } from '../../components/Loader';
import { Slider } from '../../components/Slider';

import { Card } from '../../types/Card';

import { getPhones } from '../../api/phones';

import './Home.scss';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [phones, setPhones] = useState<Card[]>([]);

  useEffect(() => {
    getPhones({
      amount: '71',
      page: '1',
    })
      .then(result => setPhones(result[1]))
      .catch(() => {
        throw new Error('Something went wrong');
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  const newModels = phones.filter(phone => phone.year >= 2019);

  const hotPrice = phones.filter(phone => phone.price >= 1300);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="homepage">
          <div className="container">
            <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
            <Banner />
            <h2 className="homepage__subtitle">Brand new models</h2>
            <Slider phones={newModels} />
            <h2 className="homepage__subtitle">Hot prices</h2>
            <Slider phones={hotPrice} />
          </div>
        </div>
      )}
    </div>
  );
};
