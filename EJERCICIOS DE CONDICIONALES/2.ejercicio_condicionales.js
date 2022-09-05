/*2. Escribe un programa que pida tres números y que escriba si son los tres 
iguales, si hay dos iguales o si son los tres distintos*/
var x = Math.round(Math.random() * 100);
var y = Math.round(Math.random() * 100);
var z = Math.round(Math.random() * 100);
if (x == y && x == z && y == z) {
  console.log(`Hay tres números que son iguales \n${x} \n${y} \n${z} `);
} else if (x == y && x != z && y != z) {
  console.log(`Hay dos números que son iguales \n${x} \n${y} \n${z} `);
} else {
  console.log(`Los tres números son diferentes \n${x} \n${y} \n${z} `);
}