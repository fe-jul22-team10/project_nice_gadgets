import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
    <div className={classNames({
      'scroll-off': showBurger,
    })}>
      <Header showBurger={showBurger} setShowBurger={setShowBurger}/>
      <div className="body-main">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<NotFound />} />

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
