# 期末專案:自己寫一個blog
目前可以列出已經寫在程式內的文章，並正常顯示。
## 製作blog大概順序
### 寫一個可以正常使用的Hello world(home)
1. 需要koa -> const Koa = require('koa')
i. 要new一個app -> const app = new Koa()
2. 需要koa-router ->const router = require('koa-router')()
(1) app.use(router.routes())
3. 要new一個app -> const app = new Koa()
4. app.listen(3000)
5. 為了方便加console.log('server run at http://localhost:3000/')

### 做出列表(list)

### 讓文章頁面正常顯示
