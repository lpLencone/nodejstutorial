const http = require('http')

// create server and look for a callback function
// callback function gets two arguments: req(uest) and res(ponse)
// request being everything the client requests through the browser
// response being what the server will return to the client
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // write on the window
    // res.write('Hello world')
    // end request
    return res.end('Hello world')
  }
  if (req.url === '/about') {
    // end request with message
    return res.end('here is my short story')
  }
  // setting default display if user requests a page the application don't have a response for
  return res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page on the path ${req.url}.</p>
    <a href='/'>Go back to homepage</a>
  `)
})

// port the server will listen to
// the argument is an arbitrary number
server.listen(5000)
