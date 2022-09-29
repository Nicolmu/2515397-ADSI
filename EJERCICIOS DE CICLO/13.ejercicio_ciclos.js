/*Solicitar al usuario un número de hasta 9 dígitos e
imprimirlo en orden contrario. Ej. digito 6754 imprimo 4576 */
//153746456 => 647351
//slipt= va generar un arreglo [1,5,3,7,4,6]
//join= Une todos los caracteres 
//Number=Convertir la inversión en número}
//toSring= para objetos Number

function invertirnum(num){
    return Number(num.toString().split('').reverse().join(''))
}
console.log('num =153746')
console.log(invertirnum(153746))
