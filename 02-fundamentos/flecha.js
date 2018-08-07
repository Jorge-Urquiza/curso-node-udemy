function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 5));
/* las funciones normales se pueden traducir en funciones de flechas de la siguiente manera */
// si la funcion es de una sola linea se puede hacer de esta manera

let result = (a, b) => a + b;
console.log(result(7, 5));

let saludo = () => "Hello World";
console.log(saludo());

let saludar = () => {
    return 'Hola Mundo';
}
console.log(saludar());

//////////////////////////////////////
let saludin = (nombre) => {
    return `Hola ${nombre}`;
}
console.log(saludin('Jorge Luis'));

let saludo2 = (nombre) => `Hola ${nombre}`;
console.log(saludo2('Jorge Luis Urquiza Contreras'));

///////////////////////////////////////////////////
let player2 = {
    name: "Lionel",
    lastName: "Messi",
    position: "Delantero",

    getPlayer() {
        return `Nombre: ${this.name} - Apellido: ${this.lastName} - Posicion : ${this.position}`;
    }
};
console.log(player2.getPlayer());