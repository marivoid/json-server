const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000; // Use Render's assigned PORT or default to 3000 locally
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

/* const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();

// db.json is outside the functions folder, one level up
const router = jsonServer.router(path.join(__dirname, "../db.json"));

const dbPath = path.join(__dirname, "../db.json"); // Adjust this path as needed
console.log("Looking for db.json at:", dbPath);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const handler = server.listen(10000, () => {
  console.log("JSON Server is running on port 10000");
}); */

module.exports = handler;
