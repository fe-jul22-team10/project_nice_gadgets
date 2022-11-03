'use strict';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { getProductById, getProductsByQuery } from './controllers/products';

export const server = () => {
  dotenv.config();

  const app = express();

  app.use(cors());

  app.get('/', (req, res) => {
    res.send(
      `Hello world!
      This is Team10 api`,
    );
  });

  app.get('/products', getProductsByQuery);

  app.get('/products/:id', getProductById);

  app.use(express.static('./src/public'));

  return app;
};
