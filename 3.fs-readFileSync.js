/*
 *
 * fs.readFileSync():
 * Synchronous Version 
 * https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
 * 
*/
const fs = require('node:fs')

console.log('Reading first archive ...')
const text = fs.readFileSync('./file1.txt', 'utf-8')  

console.log(text)

console.log('Reading second archive ...')
const secondText = fs.readFileSync('./file2.txt', 'utf-8')

console.log(secondText)

