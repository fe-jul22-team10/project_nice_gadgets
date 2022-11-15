import React, { CSSProperties } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '10px auto',
};

export const Loader: React.FC = () => (
  <FadeLoader color="#D5D5D5" loading={true} cssOverride={override} />
);
