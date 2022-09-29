/*La fecha de Pascua corresponde al primer domingo después de la primera luna
llena que sigue al equinoccio de primavera, y se calcula con las siguientes
expresiones:
A= año MOD 19
B= año MOD 4
C= año MOD 7
D= (19*A+24) MOD 30
E= (2*B+4*C+6*D+5) MOD 7
N= (22+D+E)
En el que N indica el número de día del mes de marzo (o abril si N es superior a*/
var año = Math.round(Math.random() * (1 - 10000) + 10000)
console.log(`año: ${año}`)
console.log('__________________________________________________')
var a = año % 9
var b = año % 4
var c = año % 7
var d = (19 * a + 24) % 30
var e = ((2 * b) + (4 * c) + (6 * d) + 5) % 7
var f = (20 + d + e)
console.log('__________________________________________________')
console.log('Dia del mes:', f) //Dia del mes de febrero
console.log('__________________________________________________')

if ((d == 29) && (e == 6)) {
    console.log(año + "-04" +
        "-19");
} else if ((d == 28) && (e == 6)) {
    console.log(año + "-04" +
        "-18");
} else {
    if (f > 31) {
        console.log(año + "-04-" +
            (f - 31));
    } else {
        console.log(año + "-03-" +
            f);
    }
}