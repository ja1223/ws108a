const serve = require('koa-static');//將資料匯出(讓資料能在網路上被引用)
const Koa = require('koa');
const app = new Koa();

app.use(serve('.'));// . ->目前資料夾 ; .. -> 上一層資料夾

module.exports = app.listen(3000);

console.log('listening on port 3000');
//程式碼寫在index.html