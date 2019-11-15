const Koa = require('koa');
const fs = require('fs')
const app = module.exports = new Koa();
const path = require('path');
const extname = path.extname;

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path);//fpath -> fpath是file path(檔案路徑名稱),就是__dirname跟ctx.path連起來的結果
  console.log('__dirname=',__dirname)//_-dirname -> 程式所在資料夾(根目錄)
  console.log('fpath=',fpath)
  const fstat = await fs.promises.stat(fpath);
  console.log('fstat=',fstat)//fstat -> 檔案狀態,印出檔案的各種資料

  if (fstat.isFile()) {
    ctx.type = extname(fpath);//extname -> 取附檔名 ,ctx.type會把副檔名轉成http的標準格式
    ctx.body = fs.createReadStream(fpath);//createReadStream -> 讀完檔案用串流方式傳回(可以省記憶體)

    let type = path.extname(fpath)
    console.log('type=',type)//普通的副檔名  (.md)
    console.log('ctx.type=',ctx.type)//副檔名(在http中的標準格式)  (text/markdown)
    console.log('ctx.body=',ctx.body)
  }
});

if (!module.parent) {
  app.listen(3000);
  console.log('server run at http://localhost:3000/')
}

