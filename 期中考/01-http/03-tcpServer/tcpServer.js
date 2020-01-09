<<<<<<< HEAD
var net = require('net');

var server = net.createServer(function(socket) {
  socket.write('HTTP/1.0 200 OK\nContent-Type: text/plain\nContent-Length: 12\n\nHello World!')
  socket.end()
});

server.listen(3000, '127.0.0.1')
=======
var net = require('net');

var server = net.createServer(function(socket) {
  socket.write('HTTP/1.0 200 OK\nContent-Type: text/plain\nContent-Length: 12\n\nHello World!')
  socket.end()
});

server.listen(3000, '127.0.0.1')
>>>>>>> bbd52c73514bd042927b914e78759aac4eb0911f
console.log(`Server running at http://localhost:3000/`);