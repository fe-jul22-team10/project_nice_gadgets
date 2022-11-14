import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import { Pagination } from './Pagination';
import { ProductCard } from '../../components/ProductCard';

import { getPhones } from '../../api/phones';
import { Card } from '../../types/Card';
import { Loader } from '../Loader';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';

export const PaginationBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(32);
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
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
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
                  >
                    <option>Newest</option>
                    <option>Cheap first</option>
                    <option>Expensive first</option>
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
                    <option value="32">32</option>
                    <option value="16">16</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </div>

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
