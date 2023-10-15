const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Ayush Pasi");
  res.write("<h1>Ayush Pasi</h1>");
});

server.listen(4000);
