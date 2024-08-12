/*
 *
 * CommonJS modules
 * https://nodejs.org/api/modules.html
 * 
*/

const a = 10
const b = 10

// CommonJS require module
const { sum } = require('./cjs/sum.js')
const { global_object } = require('./cjs/global_object.js')
const circle = require('./cjs/circle.js')

console.log(`The sum is: ${sum(a, b)}.`)

console.log(`The area of a circle of radius 4 is: ${circle.area(4)}`);
console.log(`The circumference of a circle of radius 4 is: ${circle.circumference(4)}`);


/*
console.log(`--> El objeto global de Javascript es globalThis: `)
console.log(global_object())
console.log(`---AQUI TERMINA GLOBAL---`)
*/

