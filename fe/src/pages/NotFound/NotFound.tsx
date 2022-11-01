import React from 'react';
import './NotFound.scss';

export const NotFound: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__code">404</h1>
      <h3 className="not-found-page__title">Not Found</h3>
      <p className="not-found-page__text">
        The resourse requested could not be found on this server
      </p>
    </div>
  );
};
