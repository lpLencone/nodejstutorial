const { readFile, writeFile } = require('fs').promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const text1 = await readFile('./content/first.txt', 'utf-8')
    const text2 = await readFile('./content/second.txt', 'utf-8')

    await writeFile('./content/writeFilePromise.txt', text1 + text2)

    const finalText = await readFile('./content/writeFilePromise.txt', 'utf-8')
    console.log(finalText)
  } catch (error) {
    console.log(error)
  }
}

start()

// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err))

// function getText(path) {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
