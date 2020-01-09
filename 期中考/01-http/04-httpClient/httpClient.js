<<<<<<< HEAD
const http = require('http');

http.get('http://localhost:3000/', (response) => {

  let data = ''

  response.on('data', (chunk) => {
    data += chunk;
  })

  response.on('end', () => {
    console.log('statusCode:', response.statusCode)
    console.log('headers:', response.headers)
    console.log('data:', data)
  })

}).on("error", (err) => {
  console.log("Error: " + err.message)
=======
const http = require('http');

http.get('http://localhost:3000/', (response) => {

  let data = ''

  response.on('data', (chunk) => {
    data += chunk;
  })

  response.on('end', () => {
    console.log('statusCode:', response.statusCode)
    console.log('headers:', response.headers)
    console.log('data:', data)
  })

}).on("error", (err) => {
  console.log("Error: " + err.message)
>>>>>>> bbd52c73514bd042927b914e78759aac4eb0911f
})