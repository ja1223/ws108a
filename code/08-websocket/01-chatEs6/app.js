var Koa = require('Koa')
var app = new Koa()
var fs = require('fs')
const server = require('http').createServer(app.callback())
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

app.use(async function(ctx, next){
  ctx.type = 'html'
  ctx.body = fs.createReadStream(__dirname + '/index.html')
})//不管甚麼網址都顯示index.html

//連線後觸發函數
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('msg:', msg)//印出msg
    io.emit('chat message', msg)//把msg傳給別人
  })
})

module.exports = server.listen(port, function(){
  console.log('listening on *:' + port)
})


