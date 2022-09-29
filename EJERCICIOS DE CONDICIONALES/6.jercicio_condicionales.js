/*6. Pida un numero al usuario que representa días del año. Diga a que mes del año
corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.
 */
var x = Math.round(Math.random()*365);
if (x<= 31){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE ENERO`)
}else if  ((x>=32)&&(x<=59)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE FEBRERO`)
  
}else if ((x>=59)&&(x<=90)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE MARZO`)
}else if  ((x>=91)&&(x<=120)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE ABRIL`)
}else if ((x>=121)&&(x<=151)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE MAYO`)
}else if  ((x>=152)&&(x<=181)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE JUNIO`)
}else if ((x>=182)&&(x<=212)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE JULIO`)
}else if  ((x>=213)&&(x<=243)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE AGOSTO`)
}else if ((x>=244)&&(x<=273)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE SEPTIEMBRE`)
}else if  ((x>=274)&&(x<=304)){
    console.log(` EL DIA ${x} SE ENCUENTRA EN EL MES DE OCTUBRE`)
}else if ((x>=305)&&(x<=334)){
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE NOVIEMBRE`)
}else{
    console.log(`EL DIA ${x} SE ENCUENTRA EN EL MES DE DICIEMBRE`)
}