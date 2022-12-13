import React, { useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';

import './Tablets.scss';

export const Tablets: React.FC = () => {
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
          <h1 className="tablets-page">
            No tablets yet
          </h1>
        </div>
      )}
    </>
  );
};
