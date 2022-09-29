/*9. Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es
posterior*/

var dia = 24
var mes= 9
var año = 2022
console.log(`Dia, Mes y Año actual: = Dia ${dia}: Mes ${mes}:Año ${año}`)


function faltantes_Dia_Mes_Año(a, b, c) {

    console.log(`Dia:${a}, Mes:${b}, Año=${c}`)//La fecha que se va consultar 
    if (c < año) {
        y = año - c
    } else if (c > año) {
        y = c - año
    }
    if (b < mes) {
        m = mes- b
    } else if (b > mes) {
        m = b - mes
    }
    if (a < dia) {
        d = dia- a
    } else if (a > dia) {
        d = a - dia
    }



    if (d,m,y) {
       //Lo faltante 
        console.log(`Los dias  desde la fecha actual hasta la consultada son ${d}, los meses ${m} y los años  ${y}`)
    }
    
                


}
faltantes_Dia_Mes_Año(Math.round(Math.random() * 31), Math.round(Math.random() * 12), Math.round(Math.random() * 10000))   


}
faltantes_Dia_Mes_Año(Math.round(Math.random() * 31), Math.round(Math.random() * 12), Math.round(Math.random() * 10000))