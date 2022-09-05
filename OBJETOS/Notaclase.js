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


