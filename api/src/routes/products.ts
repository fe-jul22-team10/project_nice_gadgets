'use strict';

import express from 'express';
import { getProductById, getProductsByQuery } from '../controllers/products';

export const productsRouter = express.Router();

productsRouter.get('/', getProductsByQuery);
productsRouter.get('/:id', getProductById);
