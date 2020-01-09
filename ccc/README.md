# 期末專案:自己寫一個blog
目前可以列出已經寫在程式內的文章，並正常顯示。
## 製作blog大概順序
### 寫一個可以正常使用的Hello world網頁 (home)
1. 需要koa -> const Koa = require('koa')
2. 需要koa-router ->const router = require('koa-router')()   app.use(router.routes())
3. 要new一個app -> const app = new Koa()
4. app.listen(3000)
5. 為了方便加console.log('server run at http://localhost:3000/')

### 做出列表(list)
做一個迴圈把文章一筆一筆的放入列表，並將列表塞入html裡面。

### 讓文章頁面正常顯示(get)
1. 設一個變數=文章的id
2. 寫一個函式來顯示此id文章的標題及內容
3. 為了顯示html的格式，再寫一個函式把第2點的內容塞進去(在這裡可以增加一些排版的css讓整體的版面看起來更好看)
4. 讓ctx.body=已變成html格式的內容

