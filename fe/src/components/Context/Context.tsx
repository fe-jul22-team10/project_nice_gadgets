import React from 'react';
import { Card } from '../../types/Card';

type callback = (prev: Card[]) => Card[];

interface ContextState {
  favoriteItems: Card[],
  setFavoriteItems: (callback: callback) => void,
  cartItems: Card[],
  setCartItems: (callback: callback) => void,
}

export default React.createContext<ContextState>({} as ContextState);
