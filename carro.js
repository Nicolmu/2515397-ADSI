
class Carrito {
    constructor(producto,categoria,Fecha,Precio,lista){
        this._producto=producto;
        this._categoria=categoria;
        this._Fecha = Fecha;
        this._Precio=Precio;
        this._lista = lista;

    }

    generarlista(){
       return this._lista
    }
    agregarproductos(productos){
        this._lista.push(productos)
    }
   
    }


let listado = []
const produc6=new Carrito ('Labial','Maquillaje','19/20/2022',12.000,listado);
console.log(produc6);

let produc5=new Carrito ('Base','Maquillaje','19/20/2022',12.000);
let produc4=new Carrito ('Pestañina','Maquillaje','19/20/2022',12.000);

Carrito.agregarproductos(produc6);




class carrito {
    constructor(producto, precio) {
        this._producto = producto;
        this._precio = precio;
        
    }
    get sumapro(){
        return this.suma();
    }
    suma(){
        return vector1._precio + vector2._precio;
    }
}

let vector1=new carrito ('labial',20.000);
let vector2=new carrito('base',35.000);
console.log()

console.log(suma1)