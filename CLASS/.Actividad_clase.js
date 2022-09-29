class producto {


    constructor (nombre,precio,iva) {
      this.nombre=nombre;
      this.precio =precio;
      this.iva= iva;
    
    }
    get nombrec(){
        return this.nombre;
    }
    // Getter
    get ivac() {
       return this.caliva();
     }
    // Método
    caliva () {
      return this.precio * this.iva;
    
    }
    
    get precioiva(){
        return this.sumip();

    }

    sumip (){
        return this.ivac + this.precio;
    }
    
    mensaje(){
        console.log('OFERTA DE CHAMPÚ COMPRALO A TAN SOLO 20.200')
    }
    }
  
  const objecto1 = new producto('champu',17000, 0.19);
  console.log(objecto1.ivac); 
  console.log(objecto1.precioiva);
  console.log(objecto1.nombre);
  objecto1.mensaje();
  
/*----------------------------------------------------------------------------------------------------------------------*/
/*var sumaab={
num1=0,
num2=0,
sumar:(num1,num2)=> console.log(`Suma= ${num1+num2}`)
}
console.log(sumaab.sumar(6,10))

var calcularsuma={
    num1:0,
    num2:0,
    suma: (num1,num2)=>{
        return(`Suma = ${num1+num2}`)
    }
}
console.log(calcularsuma.suma(6,10))*/

var calsum={
    num1:0,
    num2:0,
    
    suma1:(num1,num2)=>{
        return ( 'la '+`suma en total es =${num1+num2}`);
    
        },
    suma2:(num1,num2)=>{
    return ( 'la '+`suma en total es =${num1+num2}`);
    },

    division:(_suma1,_suma2)=>{
        return ('La' + `division es =${calsum.suma1/calsum.suma2}`);
    }
}
console.log(calsum.suma1(12,15))
console.log(calsum.division(suma1,suma2))


var calcularpromedio={

 arreglo_2:[2,3,3,4,5],

 media_arreglo2: (arreglo_2)=>{
    for (let i = 0; i < arreglo_2.length; i++){
    suma2 = suma2 + arreglo_2[i]
}
return media_arreglo2=suma2/arreglo_2
}
}
console.log(calcularpromedio)


/*Objeto donde se puede ingresar un numero (Es menor o mayor)*/
var num={
 numero:(num)=>{
    if(num>10){
       return('Es mayor ')
    }else 
       return ('Es menor ')
   
}
}
console.log(num.numero(5))