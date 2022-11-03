import React from 'react';
import cn from 'classnames';

import { getNumbers } from './PaginationBase';

type Props = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  totalPages, currentPage, onPageChange,
}) => {
  return (
    <ul className="pagination">
      <li
      className={cn('page-item', { disabled: currentPage === 1 })}
      >
        <a
          className="page-item"
          href={`/project_nice_gadgets/#/phones/?${currentPage - 1}`}
          aria-disabled={currentPage === 1}
          onClick={() => currentPage !== 1 && onPageChange((currentPage - 1))}
        >
          ❮
        </a>
      </li>

      {getNumbers(1, totalPages).map(pageNumber => (
        <li
          className={cn('page-item', { 'active': pageNumber === currentPage })}
          key={pageNumber}
        >
          <a
            className="page-item"
            href={`/project_nice_gadgets/#/phones/?${pageNumber}`}
             onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </a>
        </li>
      ))}

      <li
        className={cn('page-item', { disabled: currentPage === totalPages })}
      >
        <a
          className="page-item"
          href={`/project_nice_gadgets/#/phones/?${currentPage + 1}`}
          aria-disabled={currentPage === totalPages}
          onClick={() => currentPage !== totalPages
            && onPageChange((currentPage + 1))}
        >
          ❯
        </a>
      </li>
    </ul>
  );
};
