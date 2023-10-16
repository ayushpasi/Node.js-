const http = require("http");
const express = require("express");

const app = express();

//midleware
app.use((req, res, next) => {
  console.log("1 st middleware");
  next(); //Allow the request to continue to the next middleware line
});

app.use((req, res, next) => {
  console.log("2 nd middleware");
  res.send("<h1>Hello from express</h1>");
  next();
});
// const server = http.createServer(app);

// server.listen(4000, () => {
//   console.log("server invoked at http://localhost:4000");
// });
app.listen(4000, () => {
  console.log("server invoked at http://localhost:4000");
});
