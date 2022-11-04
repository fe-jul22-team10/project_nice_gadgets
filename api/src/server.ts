'use strict';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { productsRouter } from './routes/products';

export const server = () => {
  dotenv.config();

  const app = express();

  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Server status: is running');
  });

  app.use('/products', express.json(), productsRouter);

  app.use(express.static('./src/public'));

  return app;
};
