import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import classNames from 'classnames';
import './styles/index.scss';
import './App.scss';

export const App: React.FC = () => {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <div className={classNames(
      'content',
      { 'scroll-off': showBurger },
    )}>
      <Header showBurger={showBurger} setShowBurger={setShowBurger}/>
      <div className="content__body-main body-main">
      <Routes>
        <Route path="/" element={<Navigate to="/phones"/> } />
        <Route path="/home" element={<Home />} />

        <Route
          path="/tablets"
          element={<h1>Tablets page is currently under construction</h1>}
        />

        <Route path="/phones">
          <Route index element={<Catalog />} />
          <Route path=":pageId" element={<Catalog />} />
        </Route>

        <Route
          path="/accessories"
          element={<h1>Accessories page is currently under construction</h1>}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
};
