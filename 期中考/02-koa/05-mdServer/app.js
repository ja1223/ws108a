const Koa = require('koa');
const fs = require('fs')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt()

const app = module.exports = new Koa();
const path = require('path');
const extname = path.extname;

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path);//fpath -> fpath是file path(檔案路徑名稱),就是__dirname跟ctx.path連起來的結果
  const fstat = await fs.promises.stat(fpath);//fstat -> 檔案狀態,印出檔案的各種資料
  console.log('fpath=', fpath)//檔案路徑
  if (fstat.isFile()) {
    let ext = extname(fpath)//副檔名
    console.log('ext=', ext)
    if (ext === '.md') {//如果檔案的副檔名是.md,轉成html格式傳回
      let md = await fs.promises.readFile(fpath, 'utf8')//把檔案讀成字串再設成 變數md
      let html = mdit.render(md)//用mdit這個模組裡面的函數render把 md 轉成html格式
      ctx.type = '.html'//ctx是物件，ctx.type描述檔案屬性
      ctx.body = html//將 變數html 傳回
      console.log('ctx.body=',ctx.body)
    } else {
      ctx.type = ext
      ctx.body = fs.createReadStream(fpath)//讀完檔案用串流方式傳回
    }
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}
