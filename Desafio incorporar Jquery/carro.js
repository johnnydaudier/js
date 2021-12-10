//VARIABLES UTILES
//capturamos el contenedor de productos
let contenedorProductos = document.querySelector('.products');
//capturamos el contenedor de carro
let contenedorCarro = document.querySelector('.cart-products');
let contenedorEsc = document.querySelector('.esc');
let arrayCarro = [];
let contenidoLS = JSON.parse(localStorage.getItem('productos'));

/* INICIAMOS */
// inicio();

// function inicio() {
//     document.addEventListener('DOMContentLoad', recuperarDesdeLS);
// }

$(document).ready(function recuperarDesdeLS() {
    if(contenidoLS===null){
        arrayCarro = [];
        limpiarCarro()
    }
    else{     
        arrayCarro = contenidoLS;     
    }   
})
// $(document).ready(function(){
//     console.log("dom cargado OK");
// function showCart(){

//     const asd = document.getElementById("products-id");
//     asd.style.display = "block";
// }
$('.cart-product').mouseover(function () { 
    $('.cart-product').show();
});

$(".cart").click(function (e) { 
    
    $("#products-id").show();
    
    
});
// function closeBtn(){
//     document.getElementById("products-id").style.display = "none";
// }
$(".close-btn").click(function () {     
    $("#products-id").hide();
});


$(".btn-add").click(function(e){  
e.preventDefault();  

    const esteProducto = {

        // imagen :  $('.card-img-top').this.props("src"),
        
        titulo :  $('.card-title').html(),
        precio :  $('.numPrecio').html(),
        idProducto : $('a').attr('prod-id'),
        cantidad : 1
    }
    //hacemos una copia del arraycarro y le sumamos el nuevo producto
    arrayCarro = [...arrayCarro, esteProducto];

    crearHTML();
    
    function crearHTML() {
        limpiarCarro();
        arrayCarro.forEach(producto => {
            const  {imagen, titulo, precio, idProducto, cantidad} = producto;
            const row = document.createElement('div');
            row.classList.add('card');
            
            row.innerHTML = `<img src="${imagen}" alt="...">
            <div class="card-body">
          <h5 class="card-title"> ${titulo}</h5>
          <h5 class="precio" style="color: #2c2a2c"> ${precio}</h5>
          <h4>Cantidad: ${cantidad} </h4>
            </div>
            <div>
            <span prod-id="${idProducto}"><h5 class="eliminar">X</h5></span>          
                                
            </div>      
            `;
            contenedorCarro.appendChild(row);

        });
    }


guardarEnLS();

})




// function cargarEventos(){   
  
//     contenedorProductos.addEventListener('click', agregarProducto);
//     contenedorCarro.addEventListener('click', eliminarProducto);    
// }

// funcion que recibe un evento como parametro 
// function agregarProducto(e){   
//     e.preventDefault();
//     if(e.target.classList.contains('btn-add')) {
//         const seleccionado = e.target.parentElement;
//         leerContenido(seleccionado);
//     }
//     
// }

function eliminarProducto(e) {  
    $('.eliminar').click(function() {
        const productoEliminado =  parseInt(e.target.getAttribute('prod-id'));
        arrayCarro = arrayCarro.filter(producto => producto.idProducto !== productoEliminado);
    })
    
}
//funcion para crear el prod seleccionado y agregarlo al arreglo de carro

function limpiarCarro(){
    contenedorCarro.innerHTML = '';
}

function guardarEnLS(){
    localStorage.setItem('producto', JSON.stringify(arrayCarro));
}






