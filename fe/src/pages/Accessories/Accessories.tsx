import React, { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';

import './Accessories.scss';

export const Accessories: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <h1 className="accessories-page">
            No accessories yet
          </h1>
        </div>
      )}
      </>
  );
};
