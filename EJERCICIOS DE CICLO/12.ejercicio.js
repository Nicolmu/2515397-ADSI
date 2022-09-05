/*Escribir un programa que visualice la siguiente figura, 
utilizando ciclos. El usuario decide cuantas líneas quiere 
imprimir */


function piramide(resultado){
    for(let i=1; i<=6; ++i){
    let resultado='';

    for(let j=1; j<=i; ++i){
        resultado+='*';
    }
     return(resultado);
}
}console.log(piramide(resultado))
