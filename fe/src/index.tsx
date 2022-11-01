import React from 'react';
import ReactDOM from 'react-dom/client';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Catalog />
    {/* <NotFound /> */}
  </React.StrictMode>,
);
