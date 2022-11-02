import React from 'react';
import './Primary.scss';

type Props = {
  children: string,
};

export const Primary: React.FC<Props> = ({ children }) => {
  return (
    <button className='button'>
      {children}
    </button>
  );
};
