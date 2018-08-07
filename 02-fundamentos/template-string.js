let nombre = "Lionel";
let apellido = "Messi"

let nombreCompleto = nombre + " " + apellido;
let nameCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto === nameCompleto); // esto es true porque es basicamente lo mismo

// cuando uso template literales puedo usar codigo de javascript dentro de las ` ` 
//console.log(`${1+2}`);

// AHORA USANDO FUNCIONES
function getNombre() {
    return nombre + " " + apellido;
}
console.log(getNombre());


// USANDO TEMPLATE LITERALES
function getName() {
    return `${nombre} ${apellido}`;
}
console.log(`The Best Player in the World is: ${getName()}`);