# 期末專案:自己寫一個blog
目前可以列出已經寫在程式內的文章，並正常顯示。
## 製作blog大概順序(有些註解寫在程式內)
### 寫一個可以正常使用的Hello world網頁 (home)
1. 需要koa -> const Koa = require('koa')
2. 需要koa-router ->const router = require('koa-router')()   app.use(router.routes())
3. 要new一個app -> const app = new Koa()
4. app.listen(3000)
5. 為了方便加console.log('server run at http://localhost:3000/')
後來用html寫了一個陽春的首頁，讓首頁顯示一些文字並有個按鈕可以連接到list

### 做出列表(list)
做一個迴圈把文章的資料一筆一筆的放入列表，並將列表塞入html裡面。

### 讓文章頁面正常顯示(get)
1. 設一個變數=文章的id
2. 寫一個函式來顯示此id文章的標題及內容
3. 為了顯示html的格式，再寫一個函式把第2點的內容塞進去(在這裡可以增加一些排版的css讓整體的版面看起來更好看)
4. 讓ctx.body=已變成html格式的內容

# 網站設計進階心得
在這堂課剛開始的時候因為對java script的不熟悉而有想退選的衝動，但是因為老師每堂課都不厭其煩的為我們解釋各個程式碼的意思，讓我也慢慢地開始看得懂上課的範例程式碼。在期末時，老師說要我們寫出一個專案，剛開始我完全不知道要從哪裡下手，但老師花了大概1個多小時的時間教我們要如何從頭開始寫專案，這讓我開始有了一點方向，雖然最後寫出的專案好像沒有什麼用，但我還是覺得能夠從無到有做出一個專案很有成就感。

