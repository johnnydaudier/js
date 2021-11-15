const productos = [{id: 01, nombre: "Heladera", precio: 20000, stock: 6 },
                    {id: 02, nombre: "Lavarropas", precio: 15000, stock: 11},
                    {id: 03, nombre: "Cocina", precio: 9000, stock: 20},
                    {id: 04, nombre: "Procesadora", precio: 7500, stock: 30},
                    {id: 05, nombre: "Tostadora", precio: 4500, stock: 7},
                    {id: 06, nombre: "Freezer", precio: 18000, stock: 4}
                ];


// funcion para buscar un producto con su nombre. recibe parametro por busquedad del usuario y recorre arreglo hasta encontrar coincidencia.
const buscadorProductos = (nombreProducto) => {
   

    for (let i = 0; i< productos.length; i++){
        if(productos[i].nombre === nombreProducto){
            return productos[i].nombre;
        }
        else{
            alert("Producto no encontrado");
        }
    }
}



// buscamos el mas barato con un ciclo For y adentro un condicional
const buscarMasBarato = () =>{
    let menor;
    let flag = true;
    let nombreMenor;

    for (let i = 0; i<productos.length; i++){
        if(flag){
            menor = productos[i].precio;
            flag = false;
            
        }
        else if(productos[i].precio < menor){
            menor = productos[i].precio;
            nombreMenor = productos[i].nombre;
            
        }

        
    }  
    return console.log(`El mas barato cuesta: ${menor} y es: ${nombreMenor}`);
}
// buscamos el mas caro del mismo modo
const buscarMasCaro = () =>{
    let mayor;
    let nombreMayor;
    let flag = true;
   

    for (let i = 0; i<productos.length; i++){
        if(flag){
            mayor = productos[i].precio;            
            nombreMayor = productos[i].nombre;
            flag = false;
            
        }
        else if(productos[i].precio > mayor){
            mayor = productos[i].precio;
            nombreMayor = productos[i].nombre;
            
        }

        
    }  
    return console.log(`El mas caro cuesta: ${mayor} y es: ${nombreMayor}`);
}



// buscamos los productos que tengan menmos de 10 en stock para reponer
const buscarPocoStock = () =>{
    let poco = [];
    for(let i =0; i<productos.length;i++){
        if(productos[i].stock<10){
             
           poco.push(productos[i].nombre);
        }
    }
    console.log(`Los productos que necesitan renovar stock son: ${poco.toString()}`);
}
// buscamos productos para ser mostrados de menor precio a mayor precio
const buscarPorMenorPrecio = () => {
    
    let arrMen = productos.sort((a, b)=>a.precio-b.precio);
    return arrMen;

   
}
// buscamos productos para ser mostrados de mayor precio a menor precio
const buscarPorMayorPrecio = () => {
    
    let arrMay = productos.sort((a, b)=>b.precio-a.precio);
    return arrMay;

   
}

// buscamos productos cantidad de stock disponible.
const buscarPorStockAsc = () => {
    let arrReponer = productos.sort((a,b)=> a.stock-b.stock);
    return arrReponer;
}





