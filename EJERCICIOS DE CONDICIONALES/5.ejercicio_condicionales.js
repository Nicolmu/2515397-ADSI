/*5. En un juego de preguntas a las que se responde “Si” o “No” gana quien 
responda correctamente las tres preguntas. Si se responde mal a cualquiera de 
ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
1. Colon descubrió América?
2. La independencia de Colombia fue en el año 1810?
3. The Doors fue un grupo de rock Americano?*/

var x = Math.round(Math.random() * 1);
var y = Math.round(Math.random() * 1);
var z = Math.round(Math.random() * 1);


console.log("responde las siguientes preguntas");

if (x == 0) {
  console.log("\n Colon descubrió América?");
  console.log("\n has respondido correctamente");
}
if (x == 0 && y == 0) {
  console.log("\n La independencia de Colombia fue en el año 1810?");
  console.log("\n has respondido correctamente");
}
if (x == 0 && y == 0 && z == 1) {
  console.log("\n The Doors fue un grupo de rock Americano?");
  console.log("\n has respondido correctamente");
}
if (x == 0 && y == 0 && z == 1) {
  console.log("\n has gando el juego");
} else {
  console.log("has perdido");
}