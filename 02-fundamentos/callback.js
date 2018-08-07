/* un callback es una funcion que se ejecuta cuando algo sucede. */
/*
setTimeout(function() {
    console.log('Hello World');
}, 3000);  // son 3 segundos 
*/
/*setTimeout(() => {
    console.log('Hello World');
}, 3000); // son 3 segundos
*/
// funcion de flecha
let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        // el id va ser igual al id que estoy recibiendo
        id: id
    }
    if (id === 20) {
        callback(`El usuario con el ${id}, no existe en la BD`);
    } else {
        // llamar o ejecutar el callback
        callback(null, usuario);
    }

}
getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});