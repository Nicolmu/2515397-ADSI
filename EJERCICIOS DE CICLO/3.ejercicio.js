/* Determinar si un número es o no es perfecto. Un numero es
perfecto si la suma de sus divisores sin incluir el propio
número es igual a este */

var numberperfecto=Math.round(Math.random()*100);
var noesnumberperfecto=Math.round(Math.random()*100)


for( var i=1; i <numberperfecto /2; i++){
    if(numberperfecto %i==0){
        esnumberperfecto=FALSE;
        
    }else{
        console.log ('NO ES UN NUMERO PERFECTO', esnumberperfecto)
    }
}

console.log ('ES UN NUMERO PERFECTO', numberperfecto);
console.log('NO ES UN NUMERO PERFECCTO', esnumberperfecto);