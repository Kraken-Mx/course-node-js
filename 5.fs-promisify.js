/*
 *
 * Promisify: 
 * Convert callback-based APIs to promises.
 * https://www.npmjs.com/package/promisify
 * 
*/
const fs = require('node:fs');
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)

console.log('Reading first archive ...')
readFilePromise('./file1.txt', 'utf8')
    .then(text => {
        console.log('First text: \n', text)
    })

console.log('---> Do things while reading file ...')

console.log('Reading second archive ...')
readFilePromise('./file2.txt', 'utf8')
    .then(text => {
        console.log('Second text: \n', text)
    })

