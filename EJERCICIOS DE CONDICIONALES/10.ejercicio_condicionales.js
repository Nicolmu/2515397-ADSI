/*Solicite al usuario la hora en formato hh:mm:ss (hora militar, 24 horas). El
programa debe responder que hora será un segundo después. Ej: ingreso
11:59:59, el programa responde 12:00:00.  */


var hora = Math.round(Math.random() * 24)
var minutos = Math.round(Math.random() * 60)
var segundos = Math.round(Math.random() * 60)
console.log(`Horas: ${hora}`)
console.log(`Minutos: ${minutos}`)
console.log(`Segundos: ${segundos}`)

var h,m,s
if ((h < 24) && (m < 59) && (s < 59)) {
    console.log(`hh:${h} mm: ${m} ss: ${s+1}`)
} else if ((h < 24) && (s > 59)) {
    console.log(`hh:${h} mm: ${m+1} ss: ${s=00}`)

} else if ((h < 24) && (m > 59)) {
    console.log(`hh:${h+1} mm: ${m=00} ss: ${s=00}`)

} else { console.log('La hora no coincide') }

console.log(`El tiempo actual ${hora}:${minutos}:${segundos}`)