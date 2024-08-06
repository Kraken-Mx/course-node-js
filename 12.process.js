/*
 *
 * 'node:process'
 * The process object provides information about, and control over, the current Node.js process.
 * https://nodejs.org/api/process.html
 * 
*/

/* 
// The process.argv property returns an array containing the command-line 
// arguments passed when the Node.js process was launched.
// Example to execute: node 12.process.js kraken welcomeTo curso node09
*/
const { argv } = require('node:process');

argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
//console.log(argv);
console.log(process.argv);


/*
// The process.exit() method instructs Node.js to terminate 
// the process synchronously with an exit status of code.
*/
//process.exit(1); // To exit with a 'failure' code
//process.exit(0); // Success execute !


/*
// Process events
// The process object is an instance of EventEmitter.
*/
// The 'beforeExit' event is emitted when Node.js empties its 
// event loop and has no additional work to schedule.
process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

// The listener callback function is invoked with the value 
// of process.exitCode passed as the only argument.
process.on('exit', (code) => {
  console.log('Process exit event with code: ', code+1);
});

console.log('This message is displayed first.');


/*
// The process.cwd() method returns the current working 
// directory of the Node.js process.
*/
console.log('CWD: ', process.cwd);


/*
// The process.env property returns an object containing 
// the user environment.
// Variables de entorno.
// process.env.NODE_ENV --> ej. configurar variable para desarrollo o producción.
*/
const port = process.env.PORT;
console.log(`Your port is ${port}`);

console.log(process.env.TOTO);

