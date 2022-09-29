/*Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo
los cálculos así:
Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan
200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que
permita calcular el costo de una llamada dados los minutos de duración. */

minu = Math.round(Math.random()* 59)
console.log(`Minutos :${minu}`)
var t, adici
if (minu < 3){
    console.log(`Los minutos fueron: ${minu}`)
} else if (minu == 3){
    console.log(`BANDERAZO : ${minu} , cuesta 200 pesos`)
     
}else{
    var b= 50;
    console.log(`Minuto adicional ${b} pesos, fueron en total ${minu} minutos`)
    
}
