/*
 *
 * .js → por defecto se usa CommonJS
 * .mjs → para usar ES Modules
 * .cjs → para usar CommonJS
 * 
*/

import { sum, multiply, exponencial } from './mjs/sum.mjs'

console.log(sum(30, 20), multiply(30, 20), exponencial(1))

