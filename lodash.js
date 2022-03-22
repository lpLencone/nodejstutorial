const _ = require('lodash')

const items = ['banana', 'apple', 'lemon', 'orange']

const itemslol = _.chunk(items, 2)
console.log(itemslol)

const numbers = [1, [2, [3, [4]]]]
const newNumbers = _.flattenDeep(numbers)
console.log(newNumbers)
