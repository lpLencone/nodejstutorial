const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// listen for it
server.on('request', (req, res) => {
  res.end('welcome')
})

server.listen(5000, () => {
  console.log('server listening on port 5000')
})
