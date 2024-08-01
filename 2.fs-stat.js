/*
 * Node.js file stats
 * File-System Info
 * https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats
 * 
*/

const fs = require('node:fs') 

const stats = fs.statSync('./file1.txt')

console.log(
    `Es archivo ? ${ stats.isFile() } \n` +
    `Es carpeta ? ${stats.isDirectory()} \n` +
    `Es enlace simbólico ? ${stats.isSymbolicLink()} \n` +
    `Tamaño (bytes): ${stats.size}`
)

