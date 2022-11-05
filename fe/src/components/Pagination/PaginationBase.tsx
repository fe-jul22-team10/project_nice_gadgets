import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Pagination } from './Pagination';
import { ProductCard } from '../../components/ProductCard';

import { getPhones } from '../../api/phones';
import { Card } from '../../types/Card';
import { Loader } from '../Loader';

export const PaginationBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [products, setProducts] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveError, setHaveError] = useState(false);

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

  const handleItemsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(+event.target.value);
    setCurrentPage(1);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-pagination">
      {isLoading ? (
        <Loader />
      ) : (
        haveError ? (
        <div className="not-found-page">
          <h1 className="not-found-page__code">Error</h1>
          <h3 className="not-found-page__title">Failed to load page</h3>
          <p className="not-found-page__text">
            Oops... something went wrong
          </p>
        </div>
        ) : (
            <>
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
                  <option value="12">12</option>
                  <option value="16">16</option>
                </select>
              </div>
            </div>

            <div className="container">
              <ul className="grid">
                {products.map((item) => (
                  <li className="grid__cell" key={item.id}>
                    <ProductCard phone={item} />
                  </li>
                ))}
              </ul>
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={onPageChange}
            />
          </>
        )
      )}
    </div>
  );
};
