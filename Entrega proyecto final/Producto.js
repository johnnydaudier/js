class Producto {
    constructor(id_producto, nombre, precio, stock){
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.precio = parseFloat(this.precio);       
        this.stock = stock;

    }
    getPrecio(){
        return parseFloat(this.precio); 
    }
    getPrecioConIVA(){
        return this.precio * 1.21;
    }
    
    disminuirStock(cant){
        // let cant = "Lo que ingrese el usuario";
        return  this.stock - cant;        

    }
    getStock(){
        return parseInt(this.stock);
    }
    //METODO PARA MOSTRAR INFO DEL PRODUCTO POR SI EL USUARIO QUIERE VER MAS.
    toStringProducto(){
        return `Producto actual: ${this.nombre} \n
        Actualmente tiene un precio de: ${this.getPrecioConIVA()} IVA incluido \n
        Stock actual: ${this.stock}`;
    }
    

}