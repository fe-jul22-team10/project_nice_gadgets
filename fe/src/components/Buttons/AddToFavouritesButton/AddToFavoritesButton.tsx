import React, { useCallback } from 'react';
import { Card } from '../../../types/Card';
import './AddToFavouritesButton.scss';

type Props = {
  onAdd: () => void,
  onRemove: () => void,
  phone: Card | undefined,
  favouriteItems: Card[],
}

export const AddToFavouritesButton: React.FC<Props> = ({
  onAdd,
  onRemove,
  phone,
  favouriteItems,
}) => {
  const isInFavourites = useCallback(() => {
    if (phone !== undefined) {
      return favouriteItems.map((item: Card) => item.id).includes(phone.id);
    }
  }, [favouriteItems, phone]);

  return (
    <>
      {isInFavourites() ? (
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
