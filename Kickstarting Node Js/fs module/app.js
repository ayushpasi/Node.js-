const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  const url = req.url;
  if (url == "/") {
    res.write("<html>");

    // Read the content of the message.txt file synchronously
    let data = fs.readFileSync("message.txt", "utf8");
    data = data.replace("+", " ");

    // Display the content in your HTML response
    res.write("<head><title>Enter Message</title></head>");
    res.write("<p>Data : " + data + "</p>");
    res.write(
      "<body><form method='POST' action='/message'><input type='text' name='message'><input type='submit' value='Submit'></form></body>"
    );

    res.write("</html>");
    return res.end();
  }
  if (url == "/message" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      });
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(4000, () => {
  console.log("server invoked at http://localhost:4000");
});
