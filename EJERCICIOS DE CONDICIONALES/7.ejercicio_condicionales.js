/* Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
manera:
Si trabaja 40 horas o menos se le paga $2600 por hora
Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
horas y $5000 por cada hora extra*/

var ntrabajada=Math.round(Math.random()*40);
var nExtras=Math.round(Math.random()*100);
var hora=Math.round(Math.random()*100)
total = 0;
console.log(ntrabajada);
console.log(nExtras);

if ( hora>=40 ) {
    nExtras-40;  
    total = nExtras*5000 + ntrabajada*2600 ;
    console.log(`EL SUELDO DEL TRBAJDOR ES ${total}`)
  
}else{
  total=ntrabajada*2600;
  console.log(`EL SUELDO DEL TRABAJADOR ES ${total}`)
}
