'use strict';

import { Request, Response } from 'express';
import {
  getProductByIdFromDatabase,
  getProductsByQueryFromDatabase,
} from '../services/products';

export async function getProductsByQuery(req: Request, res: Response) {
  const { query } = req;

  try {
    const queriedProducts = await getProductsByQueryFromDatabase(query);

    res.send(queriedProducts);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function getProductById(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const foundProduct = await getProductByIdFromDatabase(Number(id));

    if (!foundProduct) {
      res.status(404).send('Item not found');

      return;
    }

    res.send(foundProduct);
  } catch (error) {
    res.status(400).send(error);
  }
}
