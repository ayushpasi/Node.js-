const http = require("http");
const fs = require("fs");
const routes = require("./routes/routes.js");
const server = http.createServer(routes);

server.listen(4000, () => {
  console.log("server invoked at http://localhost:4000");
});
