//OBJETOS LITERALES
const x=[];
var a={}
console.log(typeof(a));
var Persona={
    nombre:'Pedro perez',
    id:12345,
    datosCompletos:()=>console.log(`${Persona.nombre} ${Persona.id}`),
} 
console.log(Persona.nombre);
console.log(Persona['id']);
Persona.datosCompletos();
Persona.direccion='Calle con Kra';
console.log(Persona);
Persona.nombre="Juan Ramirez";
console.log(Persona);
delete Persona.id;
console.log(Persona);

// class Producto{
// }
// var producto1=new Producto();
// var producto2=new Producto();
// var producto3=new Producto();
// var producto4=new Producto();
// console.log(typeof(producto1));

var Persona2={
    nombre:'Pedro perez',
    id:12345,
    datosCompletos:()=>console.log(`${this.nombre} ${this.id}`),
    datosCompletos2:function(){console.log(`${this.nombre} ${this.id}`)},
    //prueba:this.datosCompletos2(),
} 

Persona2.datosCompletos2();