import React, { ChangeEvent } from 'react';
import { Card } from '../../types/Card';

type callback = (prev: Card[]) => Card[];

interface ContextState {
  favouriteItems: Card[],
  setFavouriteItems: (callback: callback) => void,
  cartItems: Card[],
  setCartItems: (callback: callback) => void,
  setPhoneId: (id: number) => void,
  query: string,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

export default React.createContext<ContextState>({} as ContextState);
