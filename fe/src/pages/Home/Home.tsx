import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Banner } from '../../components/Banner';
import { Loader } from '../../components/Loader';
import { Slider } from '../../components/Slider';
import { Category } from '../../components/CategoryHome';
import { NotFound } from '../../components/NotFound';

import { Card } from '../../types/Card';

import './Home.scss';

type Props = {
  phones: Card[],
  isLoading: boolean,
  haveError: boolean,
};

export const Home: React.FC<Props> = ({
  phones,
  isLoading,
  haveError,
}) => {
  const newModels = useMemo(() => {
    return phones.filter(phone => phone.year >= 2019);
  }, [phones]);
  const hotPrice = useMemo(() => {
    return phones.filter(phone => phone.price >= 1300);
  }, [phones]);

  const baseUrl = 'https://project-nice-gadgets.onrender.com/img';
  const mobilePhonesImage = `${baseUrl}/category-phones.png`;
  const tabletsImage = `${baseUrl}/category-tablets.png`;
  const accessoriesImage = `${baseUrl}/category-accessories.png`;

  const bgcPhone = 'category__wrapper category__wrapper--mobile';
  const bgcPTablet = 'category__wrapper category__wrapper--tablet';
  const bgcAccessories = 'category__wrapper category__wrapper--accessories';

  return (
    <div className="homepage">
      <div className="container">
        <h1 className="homepage__title">Welcome to Nice Gadgets store!</h1>
        {isLoading ? (
          <Loader />
        ) : (haveError ? (
          <NotFound />
        ) : (
          <>
            <NavLink to="/phones">
              <Banner />
            </NavLink>
            <div className="homepage__title-block">
              <h2 className="homepage__subtitle">Brand new models</h2>
              <div className="homepage__button-wrapper">
                <div className="homepage__button-prev"></div>
                <div className="homepage__button-next"></div>
              </div>
            </div>
            <Slider phones={newModels} />
            <h2 className="homepage__subtitle homepage__subtitle--category">
              Shop by category
            </h2>
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
          </>
        ))}
      </div>
    </div>
  );
};
