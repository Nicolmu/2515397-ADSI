
const administrador= require('./administrador')
class proveedores{
    constructor(Nombreproveedor, Nit, Dirrección, Cantidad_producto, Nombreproducto){
        this._Nombreproveedor=Nombreproveedor;
        this._Nit=Nit;
        this._Dirrección=Dirrección;
        this._Cantidad_producto=Cantidad_producto;
        this._Nombreproducto=Nombreproducto;
    }
    
    get Nombreproveedor(){
        return this._Nombreproveedor;
    }
    get Nit(){
        return this._Nit;
    }

    get Producto(){
        return this._Producto;
    }
    get Cantidad_producto(){
        return this._Cantidad_producto;
    }
    set Nombreproveedor(Nombreproveedor){
        this._Nombreproveedor=Nombreproveedor;
    } 
    set Nit(Nit){
        this._Nit=Nit;
    } 
    set Dirrección(Dirrección){
        this._Dirrección=Dirrección;
    }
    set Cantidad_producto(Cantidad_producto){
        this._Cantidad_producto=Cantidad_producto;
    }
    set Producto(Producto){
        this._Producto=Producto;
    }


   
  
}
let pro1=new proveedores('Luber Perdomo', 34567,'Calle 43E #12-506',12,'Xiaomi x10')
console.log(pro1);
pro1._Nombreproveedor='Luisa María Fernandez Mayorga'
console.log(pro1.Nombreproveedor);

module.exports=proveedores;