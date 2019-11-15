const Koa = require('koa');

const app = module.exports = new Koa();

app.use(async function pageNotFound(ctx) {
  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  ctx.status = 404 //反映「網頁不存在」的HTTP程式碼,顯示not found
});

if (!module.parent) app.listen(3000);
