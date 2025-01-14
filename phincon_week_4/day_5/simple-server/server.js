const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  // menerima sebuah parameter
  console.log(req.url);
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.write(req.url);
  // mengakhiri
  res.end("hello world");
});
console.log(`Server running at http://localhost:${port}`);
server.listen(port);
