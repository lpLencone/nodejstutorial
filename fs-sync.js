// file system module
const fs = require('fs')

// read file and assign its contents to the variable
let first = fs.readFileSync('./content/first.txt', 'utf8')
let second = fs.readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

// writes an existing file or create a new one
// first paramenter: path
// second paramenter: content
// third paramenter: options; 'flag:"a"' makes sure it appends content, not overwrite it.
const resultPath = './content/result-sync.txt'
function stdWrite() {
  fs.writeFileSync(
    resultPath,
    `\nmeaningless amalgamation: ${first}, ${second}`,
    {
      flag: 'a'
    }
  )
}

setInterval(() => {
  const result = fs.readFileSync('./content/result-sync.txt', 'utf-8')
  stdWrite()
  console.log(result)
}, 1000)

setInterval(() => {
  fs.writeFileSync(resultPath, `meaningless amalgamation restart:`)
}, 10000)
