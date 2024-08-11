/*
 *
 * Use Console Object
 * Instance methods of the console object.
 * https://developer.mozilla.org/en-US/docs/Web/API/console
 * 
*/

function consola (a) {
    console.log(`Hola ${a}, bienvenido a node !`)
    console.info(`Hola ${a}, bienvenido a node !`)
    console.error(`Hola ${a}, bienvenido a node !`)

    return a
}
consola('Aldo')

