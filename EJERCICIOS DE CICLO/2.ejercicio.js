/*Determinar si un numero es o no es primo*/

var numeroPrimo = 2;
var esNumeroPrimo = true;

for (var i = 2; i < numeroPrimo/2; i++) {
    if (numeroPrimo % i === 0) {
        esNumeroPrimo = false;
    }
}

    if(esNumeroPrimo){
        console.log(' Si es un numero primo', numeroPrimo);
    } else {
        console.log(' No es un numero primo', numeroPrimo);
    }