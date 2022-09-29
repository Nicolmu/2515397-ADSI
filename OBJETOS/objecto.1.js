//OBJETOS=UNA INSTANCIA DE UNA CLASE
//CLASES=DEFINE LAS CARACTERÍSTICAS DE UN OBJETO
//PROPIEDAD=UNA CARACTERÍSTICA DEL OBJETO, COMO EL COLOR
//MÉTODO=UNA CAPACIDAD DEL OBJETO,COMO CAMINAR 
//CONSTRUCTOR=ES UN MÉTODO LLAMADO EN EL MOMENTO DE LA CREACION DE INSTANCIAS 

function persona (nombre, edad){
    this.nombre=nombre;//variable publica
    this.edad=edad;
    let dni='1234567';/*declarando com una variable no se puede acceder desde afuera, Es como si no existiera para los questan afuera, al no ser publica no pueden acceder a ellos, eso se utiliza muchopor cuestiones de seguridad, solo una variable la pueda utilizar*/
    
   
    this.getdni= function(){//Metodo 
   return dni;//Como esto esta dentro de la funcion si puede acceder al dni
    }
    this.saludar=function(){ 
       console.log("Hola soy " + nombre + "tengo" + edad + "años de mi dni es" + dni );
    }
   }
   let objetopersona=new persona('Nicol Sanchez', 20);//Una instancia de la clase y un objeto
   let objectopersona2=new persona ('Valentina Amaya', 23)
   
   objetopersona.saludar();
   objectopersona2.saludar();
   console.log(objetopersona.nombre);
   console.log(objetopersona.getdni());
   
   /*----------------------------------------------------------------------------------------------------------------------------------------------------*/
   
   /*HERENCIA PROTOTIPICA*/
   
   function Animal(nombre,genero){
       //Atributos
       this.nombre=nombre;
       this.genero=genero;
   }
   
   //MÉTODOS AGREGADOS AL PROTOTIPO DE LA FUNCIÓN CONSTRUCTORA
   
   Animal.prototype.sonar=function(){
   console.log("Hago sonidos porque estoy vivo")
   }
   
   Animal.prototype.saludar=function(){
       console.log(`Hola me llamo ${this.nombre}`)
   }
   //Herencia Prototípica
   const snoopy=new Animal ("snoopy", "Macho");
   lolabunny=new Animal ("Lolabunny", "Hembra");
   
   console.log(snoopy);
   console.log(lolabunny);
   snoopy.saludar();
   snoopy.sonar();
   lolabunny.saludar();
   lolabunny.sonar();
   
   
   class producto{
       constructor(nombre, precio,iva) {
           this.nombre=nombre;
           this.precio=precio;
           this.iva=iva;
   
           this.nombre=function(){
               return nombre;
           }
   
           this.precio=function(){
               return this.precio*this.iva;
           }
   
           
       }
   
   }
   let producto1=new producto("Champú", 20000,0.19);
   console.log(producto1.precio)