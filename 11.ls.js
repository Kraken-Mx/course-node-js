/*
 *
 * 'fs.readdir()' method:
 * Is used to asynchronously read the contents of a given directory.
 * https://www.educative.io/answers/what-is-the-stream-fsreaddir-method-in-nodejs
 * 
*/
const fs = require('node:fs'); 

fs.readdir('.', { withFileTypes: true }, (err, files) => {
    console.log('Reading data from directory...')
    if (err)
        console.log('Error!' + err);
    else {
        //console.log(files)
        files.forEach(file => {
            if(file.isDirectory())
                console.log(file.name.padEnd(30) + ' --> DIRECTORY')
            else
            console.log(file.name.padEnd(30) + ' --> OTHER')
        })
    }
})

