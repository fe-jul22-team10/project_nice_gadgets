import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Card } from '../../types/Card';

import './Favourites.scss';

type Props = {
  items: Card[],
}

export const Favourites: React.FC<Props> = ({ items }) => {
  return (
    <div className="container">
      <Breadcrumbs />
      {items.length > 0 ? (
        <>
        <h1 className="page-title">Favourites</h1>
        <p className="page-total-models">{items.length} items</p>
        <ul className="grid card__wrapper">
          {items.map(item => (
            <li className="grid__cell" key={item.id}>
              <ProductCard phone={item} />
            </li>
          ))}
        </ul></>
      ) : (
        <h1 className="subtitle">No favourites yet</h1>
      )}
    </div>
  );
};
