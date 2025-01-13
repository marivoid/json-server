const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("functions/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Use Render's assigned PORT or default to 3000 locally
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
