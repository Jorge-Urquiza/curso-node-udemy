/*
 la diferencia entre let y var es que 
 la palabra reservada var puedo inicializarla cuantas veces yo quiera
 ejemplo var a = 1 , var a = 2 , var a = 3 etc... y se va quedar con el ultimo valor 
 pero la cuando uso let a = 5   , let a = 6  ESTO NO ES POSIBLE PORQUE estoy inicializando la variable mas de una vez
 y la palabra reservada let no lo permite
 solo se puede actualizar o cambiar el valor , es decir let solo se inicializa una sola vez!!"
 let a = 3 ; a = 5 ; a = 6 (Esto si es posible) 
*/
var nombre = "Wolverine";
console.log(nombre);
var nombre = "Wolverine2";
var nombre = "Wolverine4";
var nombre = "Wolverine5";
var nombre = "Wolverine5";
/* Obviamente si hago un clg e imprimo el valor de la variable nombre nos va mostrar con el ultimo valor que se haya
re inicializado */


let a = 20;
//let a= 50 ; // esto no se puede si ejecuto va tirar error porque no se puede reinicializar.
// pero si puedo actualizar su valor
a = 50;
console.log(a);
// en la impresion de a nos va mostrar 50 ejectuar nodemon let-var


////// OJO A ESTO EN LOS CICLOS ES DIFERENTE EL MANEJO DE LET Y VAR
for (var i = 0; i < 6; i++) {

    console.log(i);
}
console.log("VALOR DE i despues del ciclo for : " + i);
// i esta declarada en el ciclo pero termina con un valor despues del ciclo, pero esto con el let no se puede hacer!

/* si ejecutamos esto nos va tirar error porque let j =0 apunta a otro espacio de memoria y mantiene un valor 
 mientras este en el ciclo y afuera del ciclo ya muere la variable es decir en el console log de afuera
 ya no existe j porque murio en el espacio de memoria 
 y para imprimirlo afuera tendria que inicializarlo de nuevo

*/
for (let j = 0; j < 6; j++) {
    console.log(j);
}
//console.log("VALOR DE J despues del ciclo for : " + j); (SI EJECUTO ESTO HAY ERROR porque j no esta inicailizada)

let j = 50; // no tira error porque j del ciclo y el j que esta afuera del ciclo apuna a espacio de memoria diferentes
// por lo tanto no hay problema en re-inicializarlos!!! 

console.log("VALOR DE J despues del ciclo for : " + j);

// OTRO EJEMPLO CON LET
let j = 'Hello World';
for (let j = 0; j < 6; j++) {
    console.log(j);
}
console.log(j);
// va imprimir la cadena de caracteres por qué? porque fue inicializada arriba y ya tiene un valor
// y dentro del ciclo tiene otro pero apuntan a diferentes espacios de memoria!!! FIN