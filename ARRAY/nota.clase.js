// let vector1=[];
// vector1[0]=100;
// vector1[1]=50;
// vector1[2]='sena';
// vector1[4]=30;
// console.log(vector1);
// console.log(typeof(vector1));
//Otra forma de crear arreglos en JS
// let vec=new Array();
// vec[0]='yo';
// vec[1]='amo';
// vec[2]='programar';
// console.log(vec)
// vec[3]=[1,2,3]
// console.log(vec)

let vector=[];
let tam=Math.round((Math.random()*20-10)+10);
console.log(`Valor de variable tam:${tam}`);

for (let i = 0; i < tam ; i++) {
    vector[i]=Math.round(Math.random()*100);    
}
//let num= Math.round(Math.random()*100);    
console.log(vector);
console.log(`Tamaño del vector:${vector.length}`);


 for (let i = 0; i < vector.length; i++) {
    if (vector[i]%2==0) {
        console.log(`${vector[i]} es par`)
    } else {
        console.log(`${vector[i]} es impar`)
    } 
 }
 let cuadrados=[];
 for (let i = 0; i < vector.length; i++) {
    cuadrados[i]=Math.pow(vector[i],2);
 }
 console.log(cuadrados);