/* Determinar los divisores de un número introducido por
teclado*/

num=Math.round(Math.random()*100);
console.log(num)
for(var i=1; i<=num; i++){
    if(num %i ==0){
        console.log(i)
    }
}