const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve(__dirname + '/public'));
//_-dirname -> 程式所在資料夾(根目錄)
app.listen(3000);

console.log('listening on port 3000');
console.log('__dirname=',__dirname)
