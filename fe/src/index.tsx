import React from 'react';
import ReactDOM from 'react-dom/client';
import { Catalog } from './pages/Catalog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Catalog />
  </React.StrictMode>,
);
