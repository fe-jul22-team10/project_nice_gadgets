import React, { CSSProperties } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '10px auto',
};

export const Loader: React.FC = () => (
  <FadeLoader
    color="#36d7b7"
    loading={true}
    cssOverride={override}
  />
);
