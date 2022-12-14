import React, { useEffect, useState, ChangeEvent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Favourites } from './pages/Favourites';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import { Item } from './pages/Item';
import StateContext from './components/Context/Context';
import classNames from 'classnames';
import './styles/index.scss';
import './App.scss';
import { Card } from './types/Card';
import { getPhones } from './api/phones';

export const App: React.FC = () => {
  const [showBurger, setShowBurger] = useState(false);
  const [favouriteItems, setFavouriteItems] = useState<Card[]>([]);
  const [cartItems, setCartItems] = useState<Card[]>([]);
  const [phoneId, setPhoneId] = useState(Number(localStorage.getItem('id')));
  const [phonesFromSerever, setPhonesFromServers] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveError, setHaveError] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPhones({
      amount: '71',
      page: `1`,
    })
      .then(res => {
        localStorage.setItem('phonesFromServer', JSON.stringify(res[1]));
        setPhonesFromServers(res[1]);
      })
      .catch(() => setHaveError(true))
      .finally(() => setIsLoading(false));

    setFavouriteItems(
      JSON.parse(localStorage.getItem('favouriteItems') || '[]') as Card[],
    );

    setCartItems(
      JSON.parse(localStorage.getItem('cartItems') || '[]') as Card[],
    );

    setPhoneId(
      Number(localStorage.getItem('id')),
    );
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    return setQuery(event.target.value);
  };

  const value = {
    favouriteItems,
    setFavouriteItems,
    cartItems,
    setCartItems,
    setPhoneId,
    query,
    handleChange,
  };

  return (
    <StateContext.Provider value={value}>
      <div className={classNames(
        'content',
        { 'scroll-off': showBurger },
      )}>
      <Header showBurger={showBurger} setShowBurger={setShowBurger}/>
      <div className="content__body-main body-main">
      <Routes>
        <Route
          path="*"
          element={
            <Home
              phones={phonesFromSerever}
              isLoading={isLoading}
              haveError={haveError}
            />
          }
        />

        <Route path="/phones">
          <Route index element={<Catalog />} />
          <Route
            path=":itemId"
            element={<Item phoneId={phoneId} />}
          />
        </Route>

        <Route
          path="/tablets"
          element={<Tablets />}
        />

        <Route
          path="/accessories"
          element={<Accessories />}
        />

        <Route path="/cart" element={<Cart items={cartItems} />} />

        <Route path="/favourites" element={
          <Favourites items={favouriteItems}
        />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </StateContext.Provider>
  );
};
