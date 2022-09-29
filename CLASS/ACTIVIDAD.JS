class Factura {
    constructor(Nombre,CodigoVenta, Referencia_Producto, Iva, Precio, Cantidad){
        this._Nombre=Nombre;
        this._CodigoVenta=CodigoVenta;
        this._Referencia_Producto=Referencia_Producto;
        this._Cantidad=Cantidad;
        this._Iva=Iva;
        this._Precio=Precio;
      

    }
    get Nombre(){
        return this._Nombre;
    }
    // Getter
    get ivac() {
       return this.caliva();
     }
    // Método
    caliva () {
      return this.Precio * this.Iva;
    
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