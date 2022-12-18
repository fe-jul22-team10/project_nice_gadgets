import React from 'react';
import classNames from 'classnames';
import { getNumbers } from '../../helpers/getNumbers';

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    totalPages <= 1
      ? (null)
      : (
        <ul className="pagination">
          <li>
            <button
              type="button"
              className={classNames('page-item', {
                'page-item--disabled': currentPage === 1,
              })}
              onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
            >
              ❮
            </button>
          </li>

          {getNumbers(1, totalPages).map((pageNumber) => (
            <li key={pageNumber}>
              <button
                type="button"
                className={classNames('page-item', {
                  'page-item--selected': currentPage === pageNumber,
                })}
                onClick={() =>
                  currentPage !== pageNumber && onPageChange(pageNumber)
                }
              >
                {pageNumber}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              className={classNames('page-item', {
                'page-item--disabled': currentPage === totalPages,
              })}
              onClick={() =>
                currentPage !== totalPages && onPageChange(currentPage + 1)
              }
            >
              ❯
            </button>
          </li>
        </ul>
      )
  );
};
