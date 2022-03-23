const { writeFileSync } = require('fs')
// reset txt file
writeFileSync('./content/big-file.txt', '', { flag: 'w' })
// write lots of lines
for (let i = 1; i <= 100000; i++) {
  if (i % 2000 === 0) {
    console.log(`${i}: progres....`)
  }
  writeFileSync('./content/big-file.txt', `Big file line ${i}\n`, {
    flag: 'a'
  })
}
