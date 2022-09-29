var N= Math.round(Math.random()*(10000-1000)+1000)
var num=1;
var x,z,y
function salgebraica(){
for (let t = 0; t <10; t++){
    setTimeout(() => {
     x = (1*0.3);
     z= Math.pow(x,t);
     y= N*z
     console.log(y)
     console.log(t)
console.log(`El tiempo es ${t} y el tamaño de la poblacion es ${y}`) 
    }, 1000);

}
}
salgebraica()
var   suma=0
function sumar(t){
    var resultado;

    resultado = t++;

    return resultado;
}