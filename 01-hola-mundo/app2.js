/*function saludar(nombre) {
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
*/
// PASAR PARAMETROS en una funcion en js
// ESTE TIPO de concatenacion se llama templates literales 
function prueba(variable) {
    return `Hola desde la funcion prueba  con : ${variable}`;
}
var variables = "Esto es una variable"
console.log(prueba(variables));
/*
function saludin(a) {
    return `Hola ${a}`;
}
var b = saludito(' desde la funcion saludin');
console.log(b);
*/