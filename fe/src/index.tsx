import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import { Catalog } from './pages/Catalog';
import './styles/reset.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Catalog />
      <Footer />
    </HashRouter>
  </React.StrictMode>,
);
