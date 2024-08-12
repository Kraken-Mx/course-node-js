/*
 *
 * 'http.createServer([options][, requestListener])'
 * Returns a new instance of http.Server.
 * Handling HTTP requests and responses.
 * https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
 * 
*/
const http = require('node:http') // protocol http
const { availablePort } = require('./15.free-port')
const { sum, square_root, exponencial } = require('./cjs/sum.js')

const server = http.createServer((req, res) => {
    const a = 9
    const b = 1
    console.log('request received')
    res.end(`Hi, this is a server response !` +
        `\nSum of ${a} + ${b} = ${sum(a, b)}` 

    )
});

availablePort(0).then(port => {
    server.listen(port, () => { // Starts the HTTP server listening for connections.
        console.log(`Server listening on the free port ${port}` +
            `\nPress alt + click --> http://localhost:${port}` +
            `\nExponencial of port: ${exponencial(port)}` +
            `\nSquare Root of port: ${square_root(port)}` 
        )
    })
})

/* Ejemplo pasando el puerto 3000:
server.listen(3000, () => {
    console.log(`Server listening on port ${server.address().port}` +
            `\nPress alt + click --> http://localhost:${server.address().port}`
    )
})
*/

/* Ejemplo pasando el puerto 0:
server.listen(0, () => { // Listen 0, responde con el puerto que encuentre disponible.
    console.log(`Server listening on port http://localhost: ${server.address().port}`)
})
*/

