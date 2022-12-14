import React, { useContext, useEffect, useMemo, useState } from 'react';
import './Pagination.scss';
import { Pagination } from './Pagination';
import { ProductCard } from '../../components/ProductCard';

import { getPhones } from '../../api/phones';
import { Card } from '../../types/Card';
import { Loader } from '../Loader';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { NotFound } from '../NotFound';
import { Link } from 'react-router-dom';
import StateContext from '../../components/Context/Context';

const isIncludesName = (name: string, query: string) => {
  return name.toLowerCase().includes(query.toLowerCase());
};

export const PaginationBase: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(71);
  const [products, setProducts] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveError, setHaveError] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const { query } = useContext(StateContext);

  useEffect(() => {
    getPhones({
      amount: `${itemsPerPage}`,
      page: `${currentPage}`,
    }).then((res) => {
      setProducts(res[1]);
      setTotalPages(Math.ceil(res[0] / itemsPerPage));
      setProducts(res[1]);
    })
      .catch(() => setHaveError(true))
      .finally(() => setIsLoading(false));
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

  const sortedPhones = useMemo(() => {
    return [...products].sort((phone1, phone2) => {
      switch (sortBy) {
        case 'newest':
          return phone2.year - phone1.year;
        case 'alphabetically':
          return phone1.phoneId.localeCompare(phone2.phoneId);
        case 'cheapest':
          return phone1.price - phone2.price;
        default:
          return 0;
      }
    });
  }, [products, sortBy]);

  const visiblePhones = useMemo(() => {
    return sortedPhones
      .filter(({ name }) => isIncludesName(name, query));
  }, [sortedPhones, query]);

  return (
    <div className="container-pagination">
      <div className="container">
      <div className="back-block">
        <Link to="/home" className="link-breadcrumbs">
          <Breadcrumbs />
        </Link>
        <div className="back-block__arrow"></div>
        <Link to="/phones" className="link-breadcrumbs">
          <p className="back-block__link">Phones</p>
        </Link>
      </div>
        <h1 className="page-title">Mobile Phones</h1>
        <p className="page-total-models">{visiblePhones.length} models</p>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        haveError ? (
        <NotFound />
        ) : (
          <div className="container">
            <div className="sort-block">
              <div className="items-count">
                <div className="items-count__name">Sort by</div>
                <div>
                  <select
                    className="items-count__select items-count__sort"
                    value={sortBy}
                    onChange={handleSortBy}
                  >
                    <option value="newest">Newest</option>
                    <option value="alphabetically">Alphabetically</option>
                    <option value="cheapest">Cheapest</option>
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
                    <option value="71">All</option>
                    <option value="16">16</option>
                    <option value="8">8</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </div>
            </div>
            {visiblePhones.length > 0 ? (
              <ul className="grid">
              {visiblePhones.map((item) => (
                <li className="grid__cell" key={item.id}>
                  <ProductCard phone={item} />
                </li>
              ))}
            </ul>
            ) : (
              <h3 className="no-match-block">
                There are no phones matching the query
              </h3>
            )}
            {visiblePhones.length > 0
              && <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                  />
            }
          </div>
        )
      )}
    </div>
  );
};
