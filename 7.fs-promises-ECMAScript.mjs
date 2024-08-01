/*
 *
 * ECMAScript:
 * Is a scripting language specification on which JavaScript is based.
 * https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript
 * 
 * ES module NodeJS (MJS):
 * ECMAScript modules are the official standard format to package JavaScript code for reuse.
 * https://nodejs.org/api/esm.html
 * 
*/
import fs from 'node:fs/promises';

console.log('Reading first archive ...')
async function readOne() {
  try {
    const data = await fs.readFile('./file1.txt', { encoding: 'utf8' });
    console.log('First text: \n', data)
  } catch (err) {
    console.error(err);
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
    console.error(err);
  }
}
readTwo();

