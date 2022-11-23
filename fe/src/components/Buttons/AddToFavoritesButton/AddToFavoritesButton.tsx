import React from 'react';
import { Card } from '../../../types/Card';
import './AddToFavoritesButton.scss';

type Props = {
  onAdd: () => void,
  onRemove: () => void,
  phone: Card,
  favoriteItems: Card[],
}

export const AddToFavoritesButton: React.FC<Props> = ({
  onAdd,
  onRemove,
  phone,
  favoriteItems,
}) => {
  const isInFavorites = favoriteItems
    .map((item: Card) => item.id).includes(phone.id);

  return (
    <>
      {isInFavorites ? (
        <button
          type="button"
          className="card__buttons-favorite card__buttons-favorite--selected"
          onClick={onRemove}
        ></button>
      ) : (
        <button
          type="button"
          className="card__buttons-favorite"
          onClick={onAdd}
        ></button>
      )}
    </>
  );
};
