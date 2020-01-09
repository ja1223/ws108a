const http = require('http');//需要使用http這個套件

const hostname = '127.0.0.1';
const port = 3000;//3000這個port如果已經使用就不能再給其他人用，除非將它關掉

const server = http.createServer((req, res) => {
  res.statusCode = 200;//200->正常運作
  res.setHeader('Content-Type', 'text/plain');//plain->純文字  html->html
  res.end('Hello World\n');
});//回應程式

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
