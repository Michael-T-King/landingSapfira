const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.db = router.db;
server.use(middlewares);
server.use(auth);

server.use(router);
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`JSON Server with authentication is running on port ${PORT}`);
});
