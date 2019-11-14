const Koa = require('koa')
const fs = require('fs')
const koaBody = require('koa-body')
const MarkdownIt = require('markdown-it')
const mdit = new MarkdownIt()

const app = module.exports = new Koa()
const path = require('path')
const extname = path.extname

app.use(koaBody({ jsonLimit: '1kb' }))

app.use(async function (ctx) {
  const fpath = path.join(__dirname, ctx.path)//檔案路徑
  const fstat = await fs.promises.stat(fpath)//fstat -> 檔案狀態,印出檔案的各種資料
  console.log('fpath=', fpath)
  if (fstat.isFile()) {
    let ext = extname(fpath)
    if (ext === '.md') {//如果檔案的副檔名是.md
      let md = await fs.promises.readFile(fpath, 'utf8')//把檔案讀成字串再設成 變數md
      let op = ctx.query.op
      ctx.type = '.html'//ctx.type描述檔案屬性為 .html
      switch (op) {//利用op決定動作
        case 'edit': ctx.body = mdEdit(md, ctx.path); break//呈現mdEdit的畫面
        case 'save':
          let mdText = ctx.request.body.mdText//把mdEdit的mdText(textarea內的文字)設為變數mdText
          await fs.promises.writeFile(fpath, mdText)
          ctx.redirect(ctx.path)//把儲存後的內容導回沒有參數的網址(顯示畫面))
          break
        default: ctx.body = mdRender(md, ctx.path)//使用mdRender( )這個函式並回傳結果
      }
    } else {
      ctx.type = ext//ctx.type描述檔案屬性 = 檔案的副檔名
      ctx.body = fs.createReadStream(fpath)//讀完檔案用串流方式傳回
    }
  }
})

if (!module.parent) {
  app.listen(3000)
  console.log('server run at http://localhost:3000/')
}

function layout (html) {
  return `
<html>
<head>
  <link rel="stylesheet" type="text/css" href="theme.css">
</head>
<body>
${html}
</body>
</html>
`
}//加html的頭尾跟css

function mdRender (md, path) {
  return layout(`
  <div><a href="${path}?op=edit">Edit</a></div>
  ${mdit.render(md)}
  `)
}
// ${mdit.render(md)} 把md轉成html

function mdEdit (md, path) {
  return layout(`
  <div>
    <form action="${path}?op=save" method="post">
      <h2>Path: ${path}</h2>
      <textarea name="mdText">${md}</textarea>
      <br/><br/>
      <button>Save</button>
    </form>
  </div>
  `)
  //textarea 文字編輯區
  //mdText = textarea內的文字
}
