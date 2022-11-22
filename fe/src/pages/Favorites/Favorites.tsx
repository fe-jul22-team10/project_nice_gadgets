import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Card } from '../../types/Card';

import './Favorites.scss';

type Props = {
  items: Card[],
}

export const Favorites: React.FC<Props> = ({ items }) => {
  return (
    <div className="container">
      <Breadcrumbs />
      <h1 className="page-title">Favourites</h1>
      <p className="page-total-models">{items.length} items</p>
      <ul className="grid card__wrapper">
        {items.map(item => (
          <li className="grid__cell" key={item.id}>
            <ProductCard phone={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
