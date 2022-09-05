
/*Genere una medida de temperatura en grados celcius de forma aleatoria y conviertala a Fahrenheit, Kelvin y Rankine.*/

var a= Math.round(Math.random() * 100);
var b= Math.round(Math.random() * 100);
var c= Math.round(Math.random() * 100);

function x1(a,b,c){
    return(((-1)*b)-(Math.sqrt(Math.pow(b,2))-(4*a*c)))/(2*a); 
    }
    var resultado_x1= x1 (a,b,c)
    console.log ('x1 ='+ resultado_x1)

function X2(a,b,c){
    return (((-1)*b)+(Math.sqrt(Math.pow(b,2))-(4*a*c)))/(2*a); 
}
    var resultado_x2= X2 (a,b,c)
    console.log ('x2 ='+ resultado_x2)
