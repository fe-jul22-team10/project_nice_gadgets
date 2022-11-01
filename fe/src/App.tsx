import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavigationLink } from './components/NavLink';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <>
      <NavigationLink />
      <Routes>
        <Route path="/" element={<p>H</p>} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="phones">
          <Route index element={<Catalog />} />
          <Route path=":pageId" element={<Catalog />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
