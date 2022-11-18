import React, { useEffect, useState } from 'react';
import { Banner } from '../../components/Banner';
import { Loader } from '../../components/Loader';
import { Slider } from '../../components/Slider';
import { NavLink } from 'react-router-dom';
import { Category } from '../../components/CategoryHome';

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

  const baseUrl = 'https://project-nice-gadgets.herokuapp.com/img';
  const mobilePhonesImage = `${baseUrl}/category-phones.png`;
  const tabletsImage = `${baseUrl}/category-tablets.png`;
  const accessoriesImage = `${baseUrl}/category-accessories.png`;

  const bgcPhone = 'category__wrapper category__wrapper--mobile';
  const bgcPTablet = 'category__wrapper category__wrapper--tablet';
  const bgcAccessories = 'category__wrapper category__wrapper--accessories';

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="homepage">
          <div className="container">
            <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
            <Banner />
            <div className="homepage__title-block">
              <h2 className="homepage__subtitle">Brand new models</h2>
              <div className="homepage__button-wrapper">
                <div className="homepage__button-prev"></div>
                <div className="homepage__button-next"></div>
              </div>
            </div>
            <Slider phones={newModels} />
            <h2 className="homepage__subtitle homepage__subtitle--category">Shop by category</h2>
            <div className="homepage__categories categories">
            <NavLink to="/phones" className="categories__block">
              <Category
                image={mobilePhonesImage}
                title={'Mobile phones'}
                text={'95 models'}
                backgroundColor={bgcPhone}
                />
            </NavLink>
            <NavLink to="/tablets" className="categories__block">
              <Category
                image={tabletsImage}
                title={'Tablets'}
                text={'24 models'}
                backgroundColor={bgcPTablet}
              />
            </NavLink>
            <NavLink to="/accessories" className="categories__block">
              <Category
                image={accessoriesImage}
                title={'Accessories'}
                text={'100 models'}
                backgroundColor={bgcAccessories}
                />
            </NavLink>
            </div>
            <div className="homepage__title-block">
              <h2 className="homepage__subtitle">Hot prices</h2>
              <div className="homepage__button-wrapper">
                <div className="homepage__button-prev"></div>
                <div className="homepage__button-next"></div>
              </div>
            </div>
            <Slider phones={hotPrice} />
          </div>
        </div>
      )}
    </div>
  );
};
