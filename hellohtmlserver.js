const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;//200->正常運作
  res.setHeader('Content-Type', 'text/html');//html->html
  res.end('<html><body>hello <a href="https://www.youtube.com/">youtube</a></body></html>');
});//回應程式

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});