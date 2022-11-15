import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Pagination } from './Pagination';
import { ProductCard } from '../../components/ProductCard';

import { getPhones } from '../../api/phones';
import { Card } from '../../types/Card';
import { Loader } from '../Loader';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { NotFound } from '../NotFound';

export const PaginationBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [products, setProducts] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveError, setHaveError] = useState(false);
  const [sortBy, setSortBy] = useState('new');

  useEffect(() => {
    const requestProductsFromServer = async() => {
      const serverResponse = await getPhones({
        amount: `${itemsPerPage}`,
        page: `${currentPage}`,
      });

      setTotalPages(Math.ceil(serverResponse[0] / itemsPerPage));
      setProducts(serverResponse[1]);
    };

    try {
      setIsLoading(true);

      void requestProductsFromServer();
    } catch (error) {
      setHaveError(true);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, itemsPerPage]);

  const handleSortBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+event.target.value);
    setCurrentPage(1);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  products.sort((phone1, phone2) => {
    switch (sortBy) {
      case 'new':
        return phone2.year - phone1.year;
      case 'cheap':
        return phone1.price - phone2.price;
      case 'expensive':
        return phone2.price - phone1.price;
      default:
        return 0;
    }
  });

  return (
    <div className="container-pagination">
      <div className="container">
        <Breadcrumbs />
        <h1 className="page-title">Mobile Phones</h1>
        <p className="page-total-models">{products.length} models</p>
        <div className="sort-block">
          <div className="items-count">
            <div className="items-count__name">Sort by</div>
            <div>
              <select
                className="items-count__select"
                value={sortBy}
                onChange={handleSortBy}
              >
                <option value="new">Newest</option>
                <option value="cheap">Cheap first</option>
                <option value="expensive">Expensive first</option>
              </select>
            </div>
          </div>

          <div className="items-count">
            <div className="items-count__name">Items on page</div>
            <div>
              <select
                className="items-count__select"
                value={itemsPerPage}
                onChange={handleItemsPerPage}
              >
                <option value="24">24</option>
                <option value="16">16</option>
                <option value="8">8</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        haveError ? (
        <NotFound />
        ) : (
          <div className="container">
            <ul className="grid">
              {products.map((item) => (
                <li className="grid__cell" key={item.id}>
                  <ProductCard phone={item} />
                </li>
              ))}
            </ul>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </div>
        )
      )}
    </div>
  );
};
