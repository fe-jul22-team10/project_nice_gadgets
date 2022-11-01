import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send(
    `Hello world!
    This is Team10 api
  `);
});

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
