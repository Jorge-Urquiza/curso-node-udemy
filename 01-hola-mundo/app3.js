console.log('Inicio del programa');
// esto nos sirve para ejecutar algo en en un determinado tiempo
// y a ese algo es un callbaack
setTimeout(function() {
    console.log('Primer TimeOut');
}, 3000);
/// mili segundos o 3 segundos 
setTimeout(function() {
    console.log('Segundo TimeOut');
}, 0);
setTimeout(function() {
    console.log('Tercer TimeOut');
}, 0);
console.log('Fin de todas  las instrucciones');

// quedamos en el video de donde instalar npm