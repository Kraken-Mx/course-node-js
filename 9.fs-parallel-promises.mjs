/*
 *
 * Promise.all()
 * Async Parallel Execution
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 
*/

import { readFile } from "node:fs/promises";

Promise.all([
  console.log('text1 ...'),
  readFile('./file1.txt', { encoding: 'utf8' }),
  console.log('text3 ...'),
  readFile('./file2.txt', { encoding: 'utf8' })
]).then(([text1, text2, text3, text4]) => {
  text1
  console.log('text2: \n', text2)
  text3
  console.log('text4: \n', text4)
})

