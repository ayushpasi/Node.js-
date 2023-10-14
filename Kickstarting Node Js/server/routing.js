const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  const url = req.url;
  if (url == "/home" || "/") {
    res.write("<h1>Welcome home</h1>");
    res.end();
  }
  if (url == "/about") {
    res.write("<h1> Welcome to About Us page</h1>");
    res.end();
  }
  if (url == "/node") {
    res.write("<h1>Welcome to my Node Js project</h1>");
    res.end();
  }
});
server.listen(4000, () => {
  console.log("server run at   http://localhost:4000");
});
