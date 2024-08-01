/*
 *
 * fs.readFile()
 * Callback
 * https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
 * 
*/
const fs = require('node:fs')

console.log('Reading first archive ...')
fs.readFile('./file1.txt', 'utf8', (err, text) => { 
    if (err) {
      console.error(err)
      return
    }
    console.log('First text: \n', text)
});

console.log('---> Do things while reading file ...')

console.log('Reading second archive ...')
fs.readFile('./file2.txt', 'utf8', (err, text) => { 
    if (err) {
      console.error(err)
      return
    }
    console.log('Second text: \n', text)
});

