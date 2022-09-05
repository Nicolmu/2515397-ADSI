//ARREGLOS FOR...


//sintaxis

let vector =[] //arreglo vacio -  cuando nosn saltamos un vectoempty vasio se coloca cuando no agregamos un espacio
vector [0]=100; //Esto quiere decir que aca se quiere escribir el numero cien
vector [1]= 50;
vector [2]='sena';
vector [4]= 30;
console.log(vector);
console.log (typeof(vector));//Es un objeto

//Otra forma de arreglo
let vec = new Array();
vec [0]= 'yo';
vec [1]= 'amo';
vec [2]= 'programar';
console.log(vec);
vec [3]= [1, 2, 3]
console.lof(ve)


//1. Ejemplo


//vector.legth = tamaño del vector 
let vector =[];//decalro un vector
let tam=Math.round((Math.random()*20-10)+10);
console.log(`valor de varibale tam: ${tam}`);
for (let i = 0; i < tam ; i++) {
    vector [i]=Math.round((Math.random()*100)); 
    
}
console.log(vector);
console.log(`tamaño del vector:${vector.length}`);

  for(let i=0;i<vector.length; i++) {
    if(vector [i]%2==0){
        console.log(`${vector[i]} es par`)
    
    }else{
        console.log(`${vector[i]}es impar `)
    }
  } 

  
//elevar al cuadrado (vector)

/*let cuadrados=[];
for(let i=0;i<vector.length; i++) {
    console.log(Math.pow(vector[i],2))
    //la funcion que permite elevar al cuadrado
    }
    console.log(cuadrados);*/


    // Activity

    //Raiz cuadrada (vector)
    /*let Raiz =[];
    for(let i=0;i<vector.length; i++) {
        console.log(Math.sqrt(vector[i],2))
        //la funcion que permite elevar al cuadrado
        }
    console.log(Raiz);*/

     //Numero menor de los elementos 
    let filter =[];
     for(let i=0;i<vector.length; i++) {
         console.log(arreglo.filter()(vector[i],2))
         //la funcion que permite elevar al cuadrado
         }
     console.log(filter);

     

//PUNTOS ACTIVIDAD
//1- SUMAR TODOS LOS ELEMENTOS DE UN ARREGLO
const array = [1, 7, 8, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

var suma = 0;
