// import { wizard } from './wizard'
// import { barbarian } from './barbarian'

// console.log("run from index.js")
// console.log(wizard)
// console.log(barbarian)

import getClasses from './getClasses'

console.log("ran from index.js")
getClasses()

const obj = { a: 'alpha', b: 'bravo' }
const newObj = { ...obj, c: 'charlie' }
console.log(newObj)

console.log(['a', 'b', 'c'].includes('b'))