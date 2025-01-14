const http = require("http");
//untuk medeteksi apakah pathnamenya apa kosong atau ada isi
const url = require("url");
const fs = require("fs");
const port = 8080;

const calculate = (a, b, pathname, res) => {
  const endpoint = ["/sum", "/substract", "/multiply", "/divide-by"];
  if (!endpoint.includes(pathname)) {
    return res.end("phincon academy");
  }
  if (!isNaN(a) && !isNaN(b)) {
    let result = 0;
    if (pathname === endpoint[0]) {
      result = a + b;
    } else if (pathname === endpoint[1]) {
      result = a - b;
    } else if (pathname === endpoint[2]) {
      result = a * b;
    } else if (pathname === endpoint[3]) {
      result = a / b;
    }
    return res.end(String(result));
  } else {
    return res.end("invalid number provided");
  }
};
const readFile = () => {
  /** 
  fs.readFile("data.json", "utf-8", (err, data) => {
    console.log(data);
  });
  jika menggunakan readFileSync maka tidak perlu menggunakan callback, dapat ditampung ke variabel dan  dapat direturn
  */
  const data = fs.readFileSync("data/phincon.txt", "utf-8");
  return data;
};
const server = http.createServer((req, res) => {
  //response request ke server
  res.writeHead(200, { "Content-Type": "text/plain" });
  //passing request
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  const a = Number(parsedUrl.query.a);
  const b = Number(parsedUrl.query.b);
  const pathname = parsedUrl.pathname;
  if (pathname === "/") {
    res.write(String(readFile()));
    res.end();
  } else {
    res.end("phincon academy");
  }
  // return calculate(a, b, pathname, res);
});
console.log(`server running http://localhost:${port}`);
server.listen(port);
