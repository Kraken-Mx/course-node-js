/*
 *
 * Math functions
 * Using CommonJS
 * 
*/

function sum (a,b) {
    return a + b
}

function multiply (a,b) {
    return a * b
}

function exponencial (a) {
    return Math.exp(a)
}

function square_root (a) {
    return Math.sqrt(a)
}

// CommonJS Module Export
module.exports = {
    sum, multiply, exponencial, square_root
}

