<<<<<<< HEAD
const Koa = require('koa');//第一個字母大寫代表class(類別),小寫代表物件
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url=', ctx.url)
  ctx.body = 'Hello World';
  //設定傳回訊息(預設純文字)
  //ctx.type=text/html 設定html外觀
  //ctx.type=text/plain 純文字
});

=======
const Koa = require('koa');//第一個字母大寫代表class(類別),小寫代表物件
const app = module.exports = new Koa();

app.use(async function(ctx) {
  console.log('url=', ctx.url)
  ctx.body = 'Hello World';
  //設定傳回訊息(預設純文字)
  //ctx.type=text/html 設定html外觀
  //ctx.type=text/plain 純文字
});

>>>>>>> bbd52c73514bd042927b914e78759aac4eb0911f
if (!module.parent) app.listen(3000);