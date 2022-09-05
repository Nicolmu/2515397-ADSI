/*. Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el
valor del medio es 11. No use operadores lógicos*/


var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);
var z = Math.round(Math.random() * 100);
console.log(x)
console.log(y)
console.log(z)
if (x<=y) {
  if (y<=z) {
    console.log(`el número intermedio es: ${y}`)
  }
}else if(x<=z){
  if(z<=y){
    console.log(`el número intermedio es: ${z}`)
  }
}else if(y<=x){
  if (x<=z) {
    console.log(`el número intermedio es: ${x}`)
  }
}else if(y<=z){
  if (z<=x) {
    console.log(`el número intermedio es: ${z}`)
  }
}else if (z<=x){
  if (x<=y) {
    console.log(`el número intermedio es: ${x}`)
  }
}else {
  console.log(`el número intermedio es: ${y}`)
}
