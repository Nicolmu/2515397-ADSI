console.log ("hsdhgshcbsh".toUpperCase());
console.log ("JKASFNDHGUDFJ".toLowerCase());

function mayusculas(string){
    return string.toUpperCase()

}
console.log(mayusculas('hola'))

function minusculas(cadena){
    return cadena.toLowerCase()
    
}
console.log(minusculas('HOLAAA'))

function mayusculas(palabra){
    let count=0;
    let palabra='YO AMO la programacion';
    let mayusculas='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=0; i < mayusculas.length; i++){
        for(let v=0 ; v < palabra.length; v++){
        if(palabra[v] == mayusculas[i]){
            count =count +1
        }
    }
 
}
console.log(`cuantas mayusculas tiene ${count}`) 
}
console.log(mayusculas,'Yo amo programar')*/

function general(cb1,cb2,texto){
    let mini = texto.toLowerCase();
    let mayu = texto.toUpperCase();
    console.log(`El texto general es:  ${texto} \nen minúsculas es: ${mini} \nen mayúsculas es: ${mayu}`)
    cb1(texto);
    cb2(texto);


}

function minusculas(texto){
    let contar = 0;
    let minusculas = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < minusculas.length; i++) {
    for (let l = 0; l < texto.length; l++) {
    if(texto[l]==minusculas[i]){

    contar= contar + 1
        }
    }
}
console.log(`Hay un total ${contar} Minúsculas`);   
}
function mayusculas(texto){
    let contar = 0;
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < mayusculas.length; i++) {
    for (let l = 0; l < texto.length; l++) {
    if(texto[l]==mayusculas[i]){

    contar= contar + 1
        }
    }
}
console.log(`Hay un total ${contar} Mayúsculas`);   
}
general(minusculas,mayusculas,'Me Gusta Programar')



