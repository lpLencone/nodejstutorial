// path module info: https://nodejs.org/dist/latest-v16.x/docs/api/path.html

const path = require('path')

// Provides the platform-specific path segment separator:
console.log("platform-specific path segment separator: '", path.sep, "'\r\n") // on Windows: \

// The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath, '\r\n')

// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)
