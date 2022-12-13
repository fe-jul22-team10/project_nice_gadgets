import React from 'react';
import './NotFound.scss';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <p className="not-found-page__text">
        Server Error
      </p>
      <h1 className="not-found-page__code">404</h1>
    </div>
  );
};
