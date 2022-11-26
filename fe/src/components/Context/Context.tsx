import React from 'react';
import { Card } from '../../types/Card';

type callback = (prev: Card[]) => Card[];

interface ContextState {
  favouriteItems: Card[],
  setFavoriteItems: (callback: callback) => void,
  cartItems: Card[],
  setCartItems: (callback: callback) => void,
}

export default React.createContext<ContextState>({} as ContextState);
