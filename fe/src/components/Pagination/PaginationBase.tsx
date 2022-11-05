import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Pagination } from './Pagination';
import { ProductCard } from '../../components/ProductCard';

import { getPhones } from '../../api/phones';
import { Card } from '../../types/Card';

export function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

const items = getNumbers(1, 15).map((n) => `Item ${n}`);

export const PaginationBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [products, setProducts] = useState<Card[]>([]);

  useEffect(() => {
    const request = async() => {
      const productsFromServer = await getPhones({
        amount: `${itemsPerPage}`,
        page: `${currentPage}`,
      });

      setProducts(productsFromServer.slice(1));
    };

    void request();
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handleItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+event.target.value);
    setCurrentPage(1);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-pagination">
      <div className="items-count">
        <div className="items-count__name">Items on page</div>
        <div>
          <select
            className="items-count__select"
            value={itemsPerPage}
            onChange={handleItemsPerPage}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value={items.length}>All</option>
          </select>
        </div>
      </div>
      <div className="container">
        <ul className="grid">
          {products.map((item) => (
            <li key={item.id}>{<ProductCard phone={item} />}</li>
          ))}
        </ul>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
