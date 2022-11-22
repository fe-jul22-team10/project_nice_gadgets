import React, { useState } from 'react';
import { Card } from '../../../types/Card';
import './AddToFavoritesButton.scss';

type Props = {
  onAdd: () => void,
  onRemove: () => void,
  addedToFavorites: boolean,
  favoriteItems: Card[],
}

export const AddToFavoritesButton: React.FC<Props> = ({
  onAdd,
  onRemove,
  addedToFavorites,
  favoriteItems,
}) => {
  return (
    <>
      {!addedToFavorites ? (
        <button
          type="button"
          className="card__buttons-favorite"
          onClick={onAdd}
        ></button>
      ) : (
        <button
          type="button"
          className="card__buttons-favorite card__buttons-favorite--selected"
          onClick={onRemove}
        ></button>
      )}
    </>
  );
};
