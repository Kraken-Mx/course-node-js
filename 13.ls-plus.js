/*
 *
 * Read a directory and show the files details in that.
 * 'fs.readdir()' + 'fs.stat()' + 'node:process'
 * e.g. execute: node 13.ls-plus.js ./cjs
 * 
*/
const fs = require('node:fs/promises');
const path = require('node:path');
const pico = require('picocolors')

const folder = process.argv[2] ?? '.';
console.log(folder);

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        console.error(pico.red(`Don't read directory: ${folder}`))
        process.exit(1)
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        
        try {
            stats = await fs.stat(filePath) // Gets the file details.
        } catch {
            console.error(`No se pudo leer el archivo: ${filePath}`)
            process.exit(1)
        }

        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'DIR' : 'FILE'
        const fileSize = isDirectory ? '-' : stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${pico.dim(fileType.padStart(4))} ${pico.blue(file.padEnd(29))}` +
            `${pico.green(fileSize.toString().padStart(5))} ${pico.magenta(fileModified)}`
    })

    const filesInfo = await Promise.all(filesPromises)

    filesInfo.forEach(filesInfo => { console.log(filesInfo)});

}
ls(folder);

