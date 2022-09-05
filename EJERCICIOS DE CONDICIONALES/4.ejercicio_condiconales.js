/*4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien, 
etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores*/

var nota = Math.round(Math.random() * 10);

if (nota > 0 && nota <= 4) {
  console.log(`ES INSUFICIENTE ${nota}`);
} else if (nota > 4 && nota <= 7) {
  console.log(`ES SUFICIENTE ${nota}`);
} else {
  console.log(`ES BIEN ${nota}`);
}
