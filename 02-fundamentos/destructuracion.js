/*
let player = {
    name: "Lionel",
    lastName: "Messi",
    position: "Delantero",
};
console.log(`${player.name} ${player.lastName}`); // imprimir el nombre
*/

let player2 = {
    name: "Lionel",
    lastName: "Messi",
    position: "Delantero",

    getPlayer: function() {
        return `Nombre: ${this.name} - Apellido: ${this.lastName} - Posicion : ${this.position}`;
    }
};
//console.log(player2.getPlayer()); // usando la destructuracion normal 

//console.log(`Datos del Jugador ${player2.getPlayer()}`); //destructuracion con template literales

// USANDO la destructuracion 
/*
let nombre = player2.name;
let apellido = player2.lastName;
let posicion = player.position;
TODO ESTO se puede escribir de diferente manera
console.log(nombre, apellido, posicion);
*/
// usar la variable de cada objeto y  pasarla a la nueva variable ejemplo name:nombreJugador y todo eso especificar 
// del objeto que salio {a:b , c:d } = player ;

let { name: nombreJugador, lastName: apellidos, position: posicionJugador } = player2;
console.log(nombreJugador, apellidos, posicionJugador);

// otra opcion para hacer lo mismo mas directo 
let { name, lastName, position } = player2;
console.log(name, lastName, position);