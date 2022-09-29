function general(cb1,cb2,texto){
    cb1(texto);
    cb2(texto);
    let mini = texto.toLowerCase();
    let mayu = texto.toUpperCase();
    console.log(`El texto general es:  ${texto} en minúsculas es: ${mini} en mayúsculas es: ${mayu}`)
   
    



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


// especiales = '!#$%&^~*_-',
// mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// minusculas = ' abcdefghijklmnopqrstuvwxyz',
// digitos = '0123456789';