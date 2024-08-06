/*
 *
 * OS information app
 * The 'node:os' module provides operating system-related utility methods and properties.
 * https://nodejs.org/api/os.html
 * 
*/
//import { platform, release, arch, freemem, totalmem, uptime } from 'node:os' // ES module (.mjs)
const os = require('node:os') // CommonJS module

console.log('-------------------------------------------')
console.log('OS information')
console.log('-------------------------------------------')

console.log('OS name: ', os.platform())
console.log('OS version: ', os.release())

console.log('OS arquitecture: ', os.arch())
console.log('CPUs', os.cpus()) //To scale nodejs app

console.log('Free memory: ', os.freemem() / 1024 / 1024)
console.log('Total memory: ', os.totalmem() / 1024 / 1024)

console.log('Uptime: ', os.uptime() / 60 / 60, '(active hours)')

