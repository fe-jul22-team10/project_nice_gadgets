'use strict';

import { Sequelize } from 'sequelize';

// local DB for testing

// export const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
//   host: 'localhost',
//   dialect: 'postgres',
// });

// Heroku postgresQL;

export const sequelize = new Sequelize(
  'dbtlkkrrjr434v',
  'agoikpnetyahhk',
  '1fc48d6d81777978602f2c52e3ad874fe9efb12dc2dea41fd2b93221f04f691f',
  {
    host: 'ec2-54-163-34-107.compute-1.amazonaws.com',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);
