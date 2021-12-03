//VARIABLES UTILES
//capturamos el contenedor de productos
let contenedorProductos = document.querySelector('.products');
//capturamos el contenedor de carro
let contenedorCarro = document.querySelector('.cart-products');
let arrayCarro = [];
let contenidoLS = JSON.parse(localStorage.getItem('productos'));

/* INICIAMOS */
inicio();
cargarEventos();
function inicio() {
    document.addEventListener('DOMContentLoad', recuperarDesdeLS);
}

function showCart(){

    const asd = document.getElementById("products-id");
    asd.style.display = "block";
}
function closeBtn(){
    document.getElementById("products-id").style.display = "none";
}

function cargarEventos(){    
    contenedorProductos.addEventListener('click', agregarProducto);
    contenedorCarro.addEventListener('click', eliminarProducto);    
}

// fucion que recibe un evento como parametro 
function agregarProducto(e){   
    e.preventDefault();
    if(e.target.classList.contains('btn-add')) {
        const seleccionado = e.target.parentElement;
        leerContenido(seleccionado);
    }
    guardarEnLS();
}

function eliminarProducto(e) {   
    if(e.target.classList.contains('.eliminar')) {
        const eliminado =  parseInt(e.target.getAttribute('prod-id'));
        arrayCarro = arrayCarro.filter(producto => producto.idProducto !== eliminado);
    }
}
//funcion para crear el prod seleccionado y agregarlo al arreglo de carro
function leerContenido(producto){
    
    const esteProducto = {

        imagen : producto.querySelector('.card-img-top'),
        titulo : producto.querySelector('.card-title').textContent,
        precio: producto.querySelector('.precio span').textContent,
        idProducto : producto.querySelector('a').getAttribute('prod-id'),
        cantidad : 1
    }
    //hacemos una copia del arraycarro y le sumamos el nuevo producto
    arrayCarro = [...arrayCarro, esteProducto];

    crearHTML();
    
    function crearHTML() {
        limpiarCarro();
        arrayCarro.forEach(producto => {
            const  {imagen, titulo, precio, cantidad, idProducto} = producto;
            const row = document.createElement('div');
            row.classList.add('card');
            row.innerHTML = `<img src="${imagen}" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${titulo}</h5>
                <h5 class="precio" style="color: #2c2a2c;> ${precio}</h5>
                <h4>Cantidad: ${cantidad} </h4>
            </div>
            <span class="eliminar" prod-id="${idProducto}">X</span>
            `;
            contenedorCarro.appendChild(row);

        });
    }
}
function limpiarCarro(){
    contenedorCarro.innerHTML = '';
}

function guardarEnLS(){
    localStorage.setItem('producto', JSON.stringify(arrayCarro));
}

function recuperarDesdeLS() {
    if(contenidoLS===null){
        arrayCarro = [];
        limpiarCarro()
    }
    else{     
        arrayCarro = contenidoLS;     
    }   
}




