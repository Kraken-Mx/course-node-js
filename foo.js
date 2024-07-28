/*
 *
 * CommonJS modules
 * https://nodejs.org/api/modules.html
 * 
*/

const circle = require('./modules/circle.js');

console.log(`The area of a circle of radius 4 is: ${circle.area(4)}`);
console.log(`The circumference of a circle of radius 4 is: ${circle.circumference(4)}`);

