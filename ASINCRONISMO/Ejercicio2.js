/*
console.log ("hsdhgshcbsh".toUpperCase());
console.log ("JKASFNDHGUDFJ".toLowerCase());
*/

function convertir(c1,c2,string){
    let minúsculas = minuscu
    let mayusculas = mayusculas
c1(string)




    
}


function mayusculas(string){
    var contarmayusculas=0;
    var mayusculas='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(var i=0; i<mayusculas.length; i++){
        for(var v=0; v<string.length; v++){
            if(string[v]== mayusculas[i]){
                contarmayusculas+=1;
            }
        }
         
    }
    return contarmayusculas;

}


console.log(mayusculas('holA'))

function minusculas(string){
    var contarminusculas=0;
    var minusculas='abcdefghijklmnopqrstuvwxyz'
    for(var i=0; i<minusculas.length; i++){
        for(var v=0; v<string.length; v++){
            if(string[v]== minusculas[i]){
                contarminusculas+=1;
            }
        }
         
    }
    return contarminusculas;

}
convertir(minusculas,mayusculas('hoLA'))
console.log(minusculas('holA'))

/*7let cadena = "En español tenemos a la letra ñ y Ñ, así como las letras con tildes";
let minusculas = cadena.toLowerCase();
let mayusculas = cadena.toUpperCase();
console.log("En minúscula: %s", minusculas);
console.log("En mayúscula: %s", mayusculas);
*/