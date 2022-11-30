import React from 'react';
import { Card } from '../../../types/Card';
import './AddToFavouritesButton.scss';

type Props = {
  onAdd: () => void,
  onRemove: () => void,
  phone: Card,
  favouriteItems: Card[],
}

export const AddToFavouritesButton: React.FC<Props> = ({
  onAdd,
  onRemove,
  phone,
  favouriteItems,
}) => {
  const isInFavourites = favouriteItems
    .map((item: Card) => item.id).includes(phone.id);

  return (
    <>
      {isInFavourites ? (
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
