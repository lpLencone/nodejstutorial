// os module info: https://nodejs.org/dist/latest-v16.x/docs/api/os.html

// operational system module
const os = require('os')

// end of line => os.EOL => \r\n

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
  usedMemory: os.totalmem() - os.freemem()
}

console.log('currentOS info: ', currentOS)

const user = os.userInfo()
console.log(user, os.EOL)

const uptimeSeconds = os.uptime()
console.log(`the system uptime is ${uptimeSeconds} seconds`)
