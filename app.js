const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("this is about section of our page");
  }

  res.end(`
        <h1>oops nothing here</h1>
        <a href='/'> back home </a>
        `);
});

server.listen(3000);
