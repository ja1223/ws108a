<<<<<<< HEAD
const Koa = require('koa');
const fs = require('fs')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt()

const app = module.exports = new Koa();
const path = require('path');
const extname = path.extname;

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path);//檔案路徑
  const fstat = await fs.promises.stat(fpath);//fstat -> 檔案狀態,印出檔案的各種資料
  console.log('fpath=', fpath)
  if (fstat.isFile()) {
    let ext = extname(fpath)
    // console.log('ext=', ext)
    if (ext === '.md') {//如果檔案的副檔名是.md,使用mdRender( )這個函式並回傳結果
      let md = await fs.promises.readFile(fpath, 'utf8')//把檔案讀成字串再設成 變數md
      let html = mdRender(md)//用mdRender( )回傳結果並設成 變數html
      ctx.type = '.html'//ctx.type描述檔案屬性為 .html
      ctx.body = html
    } else {
      ctx.type = ext //ctx.type(描述檔案屬性) = 檔案的副檔名
      ctx.body = fs.createReadStream(fpath)//讀完檔案用串流方式傳回
    }
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}

function mdRender(md) {//寫一個函式讓 mdit.render(md) 加上html的頭尾讓css可以套用
  return `
<html>
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
<body>
  ${mdit.render(md)}
</body>
</html>
  `
//<link rel="stylesheet" type="text/css" href="theme.css"> 引用css
// ${mdit.render(md)} -> ${ }用來允許一個程式放在那個位置(通常程式跑完後是字串)
// ${mdit.render(md)} -> ${ }取字串的值插進去
//使用 ` `包住內容 內容可以換行且可以使用&{ }
}
=======
const Koa = require('koa');
const fs = require('fs')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt()

const app = module.exports = new Koa();
const path = require('path');
const extname = path.extname;

app.use(async function(ctx) {
  const fpath = path.join(__dirname, ctx.path);//檔案路徑
  const fstat = await fs.promises.stat(fpath);//fstat -> 檔案狀態,印出檔案的各種資料
  console.log('fpath=', fpath)
  if (fstat.isFile()) {
    let ext = extname(fpath)
    // console.log('ext=', ext)
    if (ext === '.md') {//如果檔案的副檔名是.md,使用mdRender( )這個函式並回傳結果
      let md = await fs.promises.readFile(fpath, 'utf8')//把檔案讀成字串再設成 變數md
      let html = mdRender(md)//用mdRender( )回傳結果並設成 變數html
      ctx.type = '.html'//ctx.type描述檔案屬性為 .html
      ctx.body = html
    } else {
      ctx.type = ext //ctx.type(描述檔案屬性) = 檔案的副檔名
      ctx.body = fs.createReadStream(fpath)//讀完檔案用串流方式傳回
    }
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}

function mdRender(md) {//寫一個函式讓 mdit.render(md) 加上html的頭尾讓css可以套用
  return `
<html>
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
<body>
  ${mdit.render(md)}
</body>
</html>
  `
//<link rel="stylesheet" type="text/css" href="theme.css"> 引用css
// ${mdit.render(md)} -> ${ }用來允許一個程式放在那個位置(通常程式跑完後是字串)
// ${mdit.render(md)} -> ${ }取字串的值插進去
//使用 ` `包住內容 內容可以換行且可以使用&{ }
}
>>>>>>> bbd52c73514bd042927b914e78759aac4eb0911f
