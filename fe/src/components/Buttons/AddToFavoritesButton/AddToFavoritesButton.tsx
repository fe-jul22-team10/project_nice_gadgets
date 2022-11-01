import React, { useState } from 'react';
import classNames from 'classnames';
import './AddToFavoritesButton.scss';

export const AddToFavoritesButton: React.FC = () => {
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const hadleAddToFavorites = () => {
    setAddedToFavorites(prevState => !prevState);
  };

  return (
    <button
      type="button"
      className={classNames(
        'card__buttons-favorite',
        { 'card__buttons-favorite--selected': addedToFavorites },
      )}
      onClick={hadleAddToFavorites}
    >
    </button>
  );
};
