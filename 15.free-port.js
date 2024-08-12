/*
 *
 * Net
 * The node:net module provides an asynchronous network API for creating stream-based TCP or IPC servers.
 * https://nodejs.org/api/net.html
 * 
*/
const net = require('node:net') // protocol tcp

function availablePort (desiredPort) {
    return new Promise((resolve, reject) => {
        const server = net.createServer()

        server.listen(desiredPort, () => {
            const { port } = server.address()
            server.close(() => {
                resolve(port)
            })
        })
        
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') { // The error code stands for 'Address Already in Use'.
                availablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })
    })
}
module.exports = {availablePort}

