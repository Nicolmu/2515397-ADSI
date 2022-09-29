/*Determinar si un numero es o no es primo*/

var num =Math.round(Math.random()*100) 
        var cont=0;
        for (let i = 1; i <= num; i++) {
            var d = num % i;
            if(d == 0){
                cont = cont +1
            }        
        }
        if (cont==2) {
            console.log(`${num} Es primo`) 
        } else {
            console.log(`${num} No es primo`)
        }