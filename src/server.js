import server from './server/index.js';

const host = process.env.HOST;
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`server running at http://${host}:${port}`);
});