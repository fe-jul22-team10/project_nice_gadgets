'use strict';

import express from 'express';
import dotenv from 'dotenv';

export const server = () => {
  dotenv.config();

  const app = express();

  app.get('/', (req, res) => {
    res.send(
      `Hello world!
      This is Team10 api`,
    );
  });

  return app;
};
