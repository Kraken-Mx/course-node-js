/*
 *
 * Immediately Invoked Function Expression:
 * Is a JavaScript function that runs as soon as it is defined.
 * https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 * 
*/
const fs = require('node:fs/promises');

console.log('Reading first archive ...');
(
    async () => {
        try {
            const data = await fs.readFile('./file1.txt', { encoding: 'utf8' });
            console.log('First text: \n', data)
        } catch (err) {
            console.error(err);
        }
    }
)();
console.log('---> Do things while reading file ... \n');

console.log('Reading second archive ...');
(
    async () => {
        try {
            const data = await fs.readFile('./file2.txt', { encoding: 'utf8' });
            console.log('Second text: \n', data)
        } catch (err) {
            console.error(err);
        }
    }
)();

