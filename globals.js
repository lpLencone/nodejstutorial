// GLOBALS  - NO WINDOW !!!!
// You can access these (and more) wherever in your code

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about environment where the program is being executed

console.log('dirname: ', __dirname)
console.log('filename: ', __filename)
// console.log('require: ', require)
// console.log('module: ', module)
// console.log('process: ', process)

setInterval(() => {
  console.log('hello world')
}, 10000)
