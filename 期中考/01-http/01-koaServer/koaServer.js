const Koa = require('koa');//需要的套件;Koa是類別(要new一個新物件)
const app = module.exports = new Koa();// new一個Koa(物件)

app.use(async function(ctx) {
  console.log('url:', ctx.url)
  // console.log('  method:', ctx.method)
  // console.log('  headers:', ctx.headers)
  ctx.type = 'text/html'//顯示成html格式
  ctx.body = 'Hello World 你好！<a href="http://tw.youtube.com">YouTube</a>';//顯示的內容
});

if (!module.parent) {
  app.listen(3000)//使用3000這個port
  console.log(`Server running at http://localhost:3000/`)
}
