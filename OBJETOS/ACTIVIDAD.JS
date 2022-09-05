//TRIANGULO
//OBJETO DE TRIANGULO
var triangulo={
    base: 0,
    altura:0,
    area:(base,altura)=>{
        return base* altura /2
    }

}
console.log(triangulo.area(9,8))

//FUNCION TRIANGULO

function triangulo(a,b,c){
    if(a!=b && b!=c){
        console.log('Es un triangulo Escaleno');
    }else{if (a==b && b==c){
        console.log('Es un triangulo Equilatero');
    } else console.log('Es un triangulo Isoceles');
}
}
(triangulo(5,7,7));


/*--------------------------------------------------------------------------------------------------------------*/
//OBJETO CUADRADO
var cuadrado={
    valorlado:0,
    ladoscuadrado:0,
    area: (valorlado,ladoscuadrado)=>{
        return(`Multiplicacion = ${valorlado**ladoscuadrado}`)
    }
}
console.log(cuadrado.area(6,10))

//FUNCION CUADRADO 
function cuadrado(a,b,c,d){
 if(a==b && b==c && c==d ){
    console.log('Si es un cuadrado porque todos sus lados son iguales')
 }else 
    console.log('No es un cuadrado porque todos sus lados son diferentes ')



}cuadrado(2,2,2,2)

/*--------------------------------------------------------------------------------------------------------- */
//OBJETO CIRCULO
var circulo={
pi:0,
circunferencia:0,
area: (pi,circunferencia)=>{
    return(`Multiplicacion = ${pi*circunferencia}`)
}
}
console.log(circulo.area(3.14,2))

//FUNCION CIRCULO
                                                        
function formulas() {
  
    /* Área de un círculo */
    this.areaCirculo = function (radio) {
      return Math.PI * Math.pow(radio,2);
    }
  
  }var f = new formulas();
  console.log ("El área de un círculo de radio 2 es " + f.areaCirculo(2));
  console.log('Si es un circulo')


/*-------------------------------------------------------------------------------------------------------------- */
//OBJETO RECTANGULO 

var rectangulo={
    largo:0,
    ancho:0,
    area: (largo,ancho)=>{
        return(`Multiplicacion = ${largo*ancho}`)
    }
}
console.log(rectangulo.area(6,10))

//FUNCION RECTANGULO
function rectangulo(a,b){
    if(a!=b){
        console.log('Es un rectangulo')
    }else{
        console.log('No es un rectangulo')
    }
}rectangulo(4,2)

