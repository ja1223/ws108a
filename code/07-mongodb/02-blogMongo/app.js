const V = require('./view')
const M = require('./model')
const logger = require('koa-logger')
const router = require('koa-router')()
const koaBody = require('koa-body')

const Koa = require('koa')
const app = module.exports = new Koa()

app.use(logger())//app.use(logger()) 使用logger這個中間鍵
app.use(koaBody())

router.get('/', list)
  .get('/post/new', add)
  .get('/post/:id', show)
  .post('/post', create)

app.use(router.routes())

async function list (ctx) {
  const posts = await M.list()
  ctx.body = await V.list(posts)
}

async function add (ctx) {
  ctx.body = await V.new()
}

async function show (ctx) {
  const id = ctx.params.id
  const post = await M.get(id)
  if (!post) ctx.throw(404, 'invalid post id')
  ctx.body = await V.show(post)
}

async function create (ctx) {
  const post = ctx.request.body
  await M.add(post)
  ctx.redirect('/')
}

async function main() {
  await M.open()
  app.listen(3000)
  console.log('Server run at http://localhost:3000')
}

if (!module.parent) {
  main().catch(error=>console.log('error'))
}
