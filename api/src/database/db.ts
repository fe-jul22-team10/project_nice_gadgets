'use strict';

import { Sequelize } from 'sequelize';

const BASE_URL = 'postgres://data_x6ad_user:dP9YJh5OheMwy11nmS16vb2zKLCizwoP';

export const sequelize = new Sequelize(
  `${BASE_URL}@dpg-cedg0fo2i3mr7lgq6dm0-a.frankfurt-postgres.render.com/data_x6ad`,
  { dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    } },
);
