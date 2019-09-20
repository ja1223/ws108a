const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;//200->正常運作
  res.setHeader('Content-Type', 'text/plain');//plain->純文字
  res.end('Hello World\n');
});//回應程式

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});