/*Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número
exceda los límites emita un mensaje y finalice el programa*/

var num = Math.round(Math.random()*10000)
console.log(num)

if (num<10){
    console.log('Tiene una cifra')
}else if (num<100){
    console.log('Tiene dos cifras')
}else if (num<1000){
    console.log('Tiene tres cifras')
}else if (num=1000){
    console.log('Tiene cuatro cifras')
    
}else{
    console.log('Finalizo el programa')
}
