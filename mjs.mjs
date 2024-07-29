/*
 *
 * .js → por defecto se usa CommonJS
 * .mjs → para usar ES Modules
 * .cjs → para usar CommonJS
 * 
*/

import { sum, multiply, exponencial } from './mjs/sum.mjs'

const a = 9
const b = 1

console.log(`Sum of ${a} + ${b} = ${sum(a, b)} \n` +
             `Multiply of ${a} * ${b} = ${multiply(a, b)} \n` +
             `Exponencial of ${b} = ${exponencial(b)} \n`
            )

