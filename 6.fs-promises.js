/*
 *
 * fsPromises.readFile()
 * Promises
 * https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
 * 
*/
const fs = require('node:fs/promises');

console.log('Reading first archive ...')
async function readOne() {
  try {
    const data = await fs.readFile('./file1.txt', { encoding: 'utf8' });
    console.log('First text: \n', data)
  } catch (err) {
    console.log(err);
  }
}
readOne();

console.log('---> Do things while reading file ...')

console.log('Reading second archive ...')
async function readTwo() {
  try {
    const data = await fs.readFile('./file2.txt', { encoding: 'utf8' });
    console.log('Second text: \n', data)
  } catch (err) {
    console.log(err);
  }
}
readTwo();

