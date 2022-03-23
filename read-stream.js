const { createReadStream } = require('fs')

const streamDefaultSize = createReadStream('./content/big-file.txt')
const streamModifiedSize = createReadStream('./content/big-file.txt', {
  highWaterMark: 90000
})

// default size: 64kb
streamDefaultSize.on('data', result => {
  // console.log(result)
})
// highWaterMark: control size
streamModifiedSize.on('data', result => {
  console.log(result)
})
