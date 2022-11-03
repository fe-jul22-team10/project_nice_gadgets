'use strict';

import { Op } from 'sequelize';
import { Query } from 'src/types/query';
import { WhereCondition } from 'src/types/whereCondition';
import { Products } from '../database/models';

export async function getAllProductsFromDatabase(query: Query) {
  const { phoneId, category, minPrice, maxPrice } = query;
  let where: WhereCondition = {};

  if (phoneId) {
    where = {
      ...where,
      phoneId,
    };
  }

  if (category) {
    where = {
      ...where,
      phoneId,
    };
  }

  if (minPrice) {
    where = {
      ...where,
      price: {
        [Op.gte]: minPrice,
      },
    };
  }

  if (maxPrice) {
    where.price = where.price
      ? {
        ...where.price,
        [Op.lte]: maxPrice,
      }
      : { [Op.lte]: maxPrice };
  }

  const products = await Products.findAll({
    where,
    order: ['id'],
    raw: true,
    logging: false,
  });

  return products;
}

export async function getProductByIdFromDatabase(id: number) {
  const product = await Products.findByPk(id, { logging: false, raw: true });

  return product;
}
