var persona={
    nombre:'Duvan Garzon',
    id:1234,
    datoscompletos:()=>console.log(`${persona.nombre} ${persona.id}`),
}
console.log(persona.nombre);
console.log(persona['id']);
persona.datoscompletos();
persona.direccion='calle 1 N°3-04';
console.log(persona);
persona.nombre='Nicol Sanchez';
console.log(persona);
delete persona.direccion;
console.log(persona);

/*--------------------------------------------------------------------------------- */
class Persona{
    #nombre
    constructor(nombre){
        this.#nombre=nombre;
    }
    get nombre(){
        return this.#nombre
    }
}
let objeto=new Persona('Luis');
console.log(objeto.nombre)


// class Persona {    
//     constructor(nombre, documento) {
//       this._nombre = nombre;
//       this._documento = documento;
//     }
//     set nombre(nombre) {
//       this._nombre = nombre;
//     }
//     set documento(documento) {
//       this._documento = documento;
//     }
//     get nombre() {
//       return this._nombre;
//     }
//     get nombre() {
//       return this._nombre;
//     }
//   }



