import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { CartItem } from './components/CartItem';
import classNames from 'classnames';
import './styles/index.scss';

// имитация сервера для CartItem
import phone from './assets/images/photos/cart-item/Phone.png';

const modelName = 'Apple iPhone 14 Pro 128GB Silver (MQ023)';

const price = '$999';

export const App: React.FC = () => {
  const [removeCartItem, setRemoveCartItem] = useState(false);
  const [showBurger, setShowBurger] = useState(false);

  return (
    <div className={classNames({
      'scroll-off': showBurger,
    })}>
      <Header showBurger={showBurger} setShowBurger={setShowBurger}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/tablets" element={<Navigate to="/phones" replace />} />

        <Route path="/phones">
          <Route index element={<Catalog />} />
          <Route path=":pageId" element={<Catalog />} />
        </Route>

        <Route
          path="/accessories"
          element={<Navigate to="/phones" replace />}
        />

        <Route
          path="/cart"
          element={
            !removeCartItem ? (
              <CartItem
                phone={phone}
                modelName={modelName}
                price={price}
                setRemoveCartItem={setRemoveCartItem}
              />
            ) : null
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
