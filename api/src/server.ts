'use strict';

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {
  getAllProductsFromDatabase,
  getProductByIdFromDatabase,
} from './services/products';

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

  app.get('/products', async(req, res) => {
    const { query } = req;
    const products = await getAllProductsFromDatabase(query);

    res.send(products);
  });

  app.get('/products/:id', async(req, res) => {
    const { id } = req.params;
    const products = await getProductByIdFromDatabase(Number(id));

    res.send(products);
  });

  app.use(express.static('./src/public'));

  return app;
};