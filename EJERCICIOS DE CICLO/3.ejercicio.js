/* Determinar si un número es o no es perfecto. Un numero es
perfecto si la suma de sus divisores sin incluir el propio
número es igual a este */
function perfect(num){
    let suma=0;
    for (let i = 1; i < num; i++ ){
        if (num%i==0){
            suma=suma+i;
        }
    }
if (suma==num) {
    return `${num} es perfecto`;
}
else{
    return `${num} No es perfecto`
}
}

console.log(perfect(28))
