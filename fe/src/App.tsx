import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { Favourites } from './pages/Favourites';
import { NotFound } from './components/NotFound';
import { Tablets } from './pages/Tablets';
import StateContext from './components/Context/Context';
import classNames from 'classnames';
import './styles/index.scss';
import './App.scss';
import { Card } from './types/Card';

export const App: React.FC = () => {
  const [showBurger, setShowBurger] = useState(false);
  const [favouriteItems, setFavouriteItems] = useState<Card[]>([]);
  const [cartItems, setCartItems] = useState<Card[]>([]);

  useEffect(() => {
    setFavouriteItems(
      JSON.parse(localStorage.getItem('favouriteItems') || '[]') as Card[],
    );

    setCartItems(
      JSON.parse(localStorage.getItem('cartItems') || '[]') as Card[],
    );
  }, []);

  const value = {
    favouriteItems,
    setFavouriteItems,
    cartItems,
    setCartItems,
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
        <Route path="*" element={<Home />} />

        <Route path="/phones">
          <Route index element={<Catalog />} />
          <Route path=":pageId" element={<Catalog />} />
        </Route>

        <Route
          path="/tablets"
          element={<Tablets />}
        />

        <Route
          path="/accessories"
          element={
            <h1 className="accessories-page">
              Accessories page is currently under construction
            </h1>
          }
        />

        <Route path="/cart" element={<Cart items={cartItems} />} />

        <Route path="/favourites" element={
          <Favourites items={favouriteItems}
        />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
      </div>
    </StateContext.Provider>
  );
};
