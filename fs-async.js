// file system module
const { readFile, writeFile } = require('fs')

// readFile(path, options, callback)
// options: enconding (e.g. 'utf8'), flag (default 'r'), etc
// callback: (err, data) => {}
// info: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback
readFile('./content/first.txt', 'utf-8', (err, data) => {
  if (err) throw err
  const first = data

  // I don't understand why call another readFile inside this readFile (ig it's because it's asyncronous?)
  // I don't really understand this asyncronous thing yet
  readFile('./content/second.txt', 'utf-8', (err, data) => {
    if (err) throw err
    const second = data

    // now an writeFile... I don't like this function nesting at all, but maybe I'll get used to it
    // writeFile(path, data, options, callback)
    // callback: err => {}
    writeFile('content/result-async.txt', first + second, 'utf8', err => {
      if (err) throw err
      console.log('the file has been changed')
    })
  })
})
