const EventEmitter = require('events')

const ee = new EventEmitter()
ee.on('response', name => {
  console.log(`data received, ${name}`)
})

ee.emit('response', 'lucas')
