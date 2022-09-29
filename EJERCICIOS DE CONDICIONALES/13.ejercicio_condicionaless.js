/*13. Solicite al usuario una cantidad numérica que expresa segundos (medida de
tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso */

var segundos_usuario = Math.round(Math.random() * (1 - 100000) + 100000),
    s, m, h
console.log(`Los segundos  por el usuario son: ${segundos_usuario}`)
console.log('_____________________________________________')

if (segundos_usuario > 3600) {
    h = segundos_usuario / 3600
    s= segundos_usuario % 3600
}


if (s > 60) {
    
    m = s/ 60
    s= segundos_usuario % 60
}


console.log('Las horas equivalen a:', Math.round(s))
console.log('_____________________________________________')
console.log('Los minutos equivalen a:', Math.round(m))
console.log('_____________________________________________')
console.log('Los segundos equivalen a:', s)









/*var horas = Math.round(Math.random()*24);
var minutos = 59;
var segundos= 59;

if(horas == 0){
    return minutos= horas;
    
}  
else if(minutos=60){
    console.log(minutos = 60*horas)
}else{
    console.log (segundos = 60 * (minutos + minutos_de_hora))
}
console.log(`${horas}: ${minutos}:${segundos}`)*/
