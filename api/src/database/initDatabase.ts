'use strict';

import { Products } from './models';

export const initDatabase = async() => {
  await Products.sync({ force: true });
};
