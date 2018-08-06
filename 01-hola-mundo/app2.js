function saludar(nombre) {
    let mensaje = `Hola ${nombre}`;
    return mensaje;
}

let saludos = saludar('jorge');
console.log(saludos);

function saludito(variable) {
    return 'Hola' + variable;
}
let a = saludito(' desde la funcion saludito');
console.log(a);

function saludin(a) {
    return `Hola ${a}`;
}
var b = saludito(' desde la funcion saludin');
console.log(b);