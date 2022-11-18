import React from 'react';

import './CategoryHome.scss';

type Props = {
  image: string,
  title: string,
  text: string,
  backgroundColor: string,
};

export const Category: React.FC<Props> = ({
  image,
  title,
  text,
  backgroundColor,
}) => {
  return (
    <div className="category">
      <div className={backgroundColor}
      >
        <img
          src={image}
          alt="phone_img"
          className="category__image"
        />
      </div>
      <h4 className="category__title">{title}</h4>
      <p className="category__text">{text}</p>
    </div>
  );
};
