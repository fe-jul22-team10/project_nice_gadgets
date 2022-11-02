'use strict';

import { server } from './server';
import { initDatabase } from './database/initDatabase';

const port = process.env.PORT || 5000;
const newServer = server();

newServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});

initDatabase();
