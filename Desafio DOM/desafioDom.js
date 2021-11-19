
const productos = [ {id: 01, nombre: "Heladera", precio: 20000, stock: 6 },
                    {id: 02, nombre: "Lavarropas", precio: 15000, stock: 11},
                    {id: 03, nombre: "Cocina", precio: 9000, stock: 20},
                    {id: 04, nombre: "Procesadora", precio: 7500, stock: 30},
                    {id: 05, nombre: "Tostadora", precio: 4500, stock: 7}
                    
];





function cargarProductos(){
        
      
    let ul = document.querySelector(".listaProductos");

    for(let prod of productos) {

    let li = document.createElement("li");

    li.innerHTML += `<h4> Producto: ${prod.nombre}</h4>
                    <p> Precio actual: ${prod.precio}</p>`;


    ul.appendChild(li);
    

    }
       
    
       
    
    
    

}
function agregarBotones(){
    let caja = document.querySelector(".listaEliminados");
    for(let prod of productos) {
        button = document.createElement("button");

        button.innerHTML = `${prod.nombre}`;
    }

    caja.appendChild(button);
};





function borrarProductos() {
      
    let ul = document.querySelector(".listaEliminados");
    let producto = prompt("Ingrese el producto a borrar");
    let prodLower = producto.toLocaleLowerCase().trim();
    let esteProd = productos.findIndex(productos => productos.nombre.toLocaleLowerCase()=== prodLower);
    
    if (esteProd > -1) {
        let  li = document.createElement("li");
     li.innerHTML = `PRODUCTOS ELIMINADOS: 
                    <p> ${productos[esteProd].nombre}</p>`;

    ul.appendChild(li);

    }
    
    
    
};
function agregarProducto() {
    let nuevo = prompt("Ingrese producto");
    nuevoLow = nuevo.toLocaleLowerCase().trim();
    let precio = Number(prompt("Ingrese el precio"));
    
    let ul = document.querySelector(".listaProductos"); 
    let li = document.createElement("li");

     li.innerHTML = `<h4> Producto: ${nuevoLow}</h4>
     <p> Precio actual: ${precio}</p>`;


     ul.appendChild(li);
};

let opcion;
while(opcion != 4){
    const m = `ELEGIR OPCION:
               1 - Mostrar lista productos
               2 - Borrar un producto
               3 - Agregar Producto
               4 - SALIR`;

            opcion = Number(prompt(m));
    switch(opcion){
        case 1: 
            cargarProductos();
            break;
        case 2: 
            
            borrarProductos();
            break;
        case 3: 
            agregarProducto();
            
            break;
        case 4:
            alert("saliendo...");                    
                
            
            break;
        
        default:
            break;   
    }
    
}



