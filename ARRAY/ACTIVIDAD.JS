//ACTIVIDAD DE ARREGLOS

let suma= 0
let promedio=0
let mayor =0
let menor =100
let vector=[]
let tam=Math.round((Math.random()*20-10)+10)
console.log('valor de variables tam:',+tam)
for (let i = 0; i <tam; i++) {
   vector[i]=Math.round(Math.random()*100)
    
}
console.log(vector)
console.log('Tamaño de vector',+vector.length);
for (let i = 0; i< vector.length; i++) {
    suma=suma+vector[i]
    promedio=suma/vector.length
}
for(i =0; i < vector.length; i ++){
  if (vector[i] >mayor)
  mayor=vector[i];
}
for(i =0; i  < vector.length; i ++){
  if (menor > vector[i])
  menor=vector[i];
}
  
console.log('La suma de todos los numeros es',+suma)
console.log('El promedio de todos los numeros es',+promedio)
console.log('el numero mayor es ', mayor)
console.log('el numero menor es ', menor)
//------------------------------------------------------------------------------------------
//ACTIVIDAD DE LA BURBUJA 


var vector3 = [];
for (let i = 0; i < 10; i++) {
    vector3[i] = Math.round(Math.random() * 100)
}
console.log(vector3)

for (i = 0; i < (vector3.length - 1); i++) {
    for (j = i + 1; j < (vector3.length); j++) {
        if (vector3[i] < vector3[j]) {
            aux = vector3[j];
            vector3[j] = vector3[i];
            vector3[i] = aux;
        }
    }
}

console.log(vector3);
//-------------------------------------------------------------------------------------------
//ACTIVIDAD DE BUSQUEDA EN UN ARREGLO
let arreglo = [10, 11, 28 , 10, 5];

let mayorQueDiez = arreglo.filter(element => element > 10);//la condicon es que sean mayor que diez

console.log(mayorQueDiez) // [11, 28]
//---------------------------------------------------------------------------------------------
//Otro ejercicio includes 
/*let arreglo = [10, 11, 3, 02, 5];

let incluyeVeinte = arreglo.includes(20);

console.log(incluyeVeinte) // true*/