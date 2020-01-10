const Koa = require('koa')
const router = require('koa-router')()
const app = new Koa()
const render = require('./render');

const posts = [
    { title: 'aaa', body: 'aaaaa' },
    { title: 'bbb', body: 'bbbbb' },
]//預設的2個文章

router
  .get('/', home)
  .get('/list', list)//網址後/list 執行list這個函式
  .get('/post/:id', get)//網址後/post/:id 執行get這個函式

app.use(router.routes())
app.listen(3000)
console.log('server run at http://localhost:3000/')

//顯示貼文內容
function get(ctx) {
    const id = ctx.params.id//設變數來表示posts的id
    //ctx.body = posts
    ctx.body = render.show(posts[id])
    ctx.type = 'text/html'
    //console.log('title:',posts[id].title)
    //console.log('body:',posts[id].body)
    //console.log('ctx.body:',ctx.body)
}

//首頁
async function home(ctx) {
    //console.log('url=', ctx.url)
    ctx.body = `
    <html>
    <body>
    <h1>This is my project.</h1>
    <p>目前能夠在list顯示原本寫在程式內的內容，並在點入後可以正常顯示</p>
    <input type="button" value="list" onclick="location.href='../list'">
    </body>
    </html>
    `
}

//文章列表
async function list(ctx) {
    ctx.body = postsToHtml(posts)
}
function postsToHtml(posts) {
    const list = []
    for (let i=0; i<posts.length; i++) {
        list.push(`<li><a href="/post/${i}">${posts[i].title}</a></li>`)
    }//把文章的標題一個一個塞進列表
    //console.log(posts)
    return `
    <html>
    <body>
    <ol>
    </ol>
    <h1>list</h1>
    ${list.join('\n')}
    </body>
    </html>
    `//把剛剛做的列表塞入html並回傳
}