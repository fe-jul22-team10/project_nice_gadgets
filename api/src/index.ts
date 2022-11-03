import { server } from './server';

const port = process.env.PORT || 5000;
const newServer = server();

newServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
