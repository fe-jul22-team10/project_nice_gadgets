'use strict';

import { Op } from 'sequelize';
import { Query } from 'src/types/query';
import { WhereCondition } from 'src/types/whereCondition';
import { Products } from '../database/models';

export async function getProductsByQueryFromDatabase(query: Query) {
  const {
    page = 1,
    amount = 4,
    phoneId,
    category,
    minPrice = -2147483648,
    maxPrice = 2147483647,
    screen,
    capacity,
    color,
    ram,
    year,
  } = query;
  let where: WhereCondition = {
    price: {
      [Op.gte]: minPrice,
      [Op.lte]: maxPrice,
    },
  };

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

  if (screen) {
    where = {
      ...where,
      screen,
    };
  }

  if (capacity) {
    where = {
      ...where,
      capacity,
    };
  }

  if (color) {
    where = {
      ...where,
      color,
    };
  }

  if (ram) {
    where = {
      ...where,
      ram,
    };
  }

  if (year) {
    where = {
      ...where,
      year,
    };
  }

  const totalProductsNumber = await Products.max(
    'id',
    { where },
  );

  const products = await Products.findAll({
    limit: amount,
    offset: (page - 1) * amount,
    where,
    order: ['id'],
    raw: true,
    logging: false,
  });

  return [totalProductsNumber, ...products];
}

export async function getProductByIdFromDatabase(id: number) {
  const product = await Products.findByPk(id, { logging: false, raw: true });

  return product;
}
