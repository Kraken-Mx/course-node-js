/*
 *
 * 'node:path' module:
 * Provides utilities for working with file and directory paths.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 
*/
const path = require('node:path')

// This method provides the platform-specific path segment separator.
console.log(path.sep)

// Joins all given path segments together using the platform-specific separator as a delimiter.
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// The path.basename() method returns the last portion of a path.
const base = path.basename('/tmp/my-secret-files/password.txt')
console.log(base)

const filename = path.basename('/tmp/my-secret-files/password.txt', '.txt')
console.log(filename)

// The path.extname() returns the extension of the path.
const extension = path.extname('image_dog.jpg')
console.log(extension)

