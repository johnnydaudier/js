//VARIABLES UTILES
//capturamos el contenedor de productos
let contenedorProductos = document.querySelector('.products');
//capturamos el contenedor de carro
let contenedorCarro = document.querySelector('.card-items');
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



$(".btn-add").click(function(e){  
e.preventDefault();  

    const esteProducto = {        
        imagen: $('div .card-img-top').attr('src'),
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
            
            row.innerHTML = `<img src="${imagen}" width="100px" height="100px" alt="...">
            <div class="card-body">
                <h5 class="card-title"> ${titulo}</h5>
                <h5 class="precio" style="color: #2c2a2c"> ${precio}</h5>
                <h4>Cantidad: ${cantidad} </h4>
            </div>
            <div>
                <span prod-id="${idProducto}"class="eliminar">X</span>          
                                
            </div>      
            `;
            contenedorCarro.appendChild(row);

        });
    }


guardarEnLS();

});
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

///////////////////////ANIMACIONES////////////////////////////////
$('div.card').mouseover(function () {     
    
    $(this).css('width','22rem');
    $(this).css('background-color', 'gray');
    $('.card').mouseleave(function () { 
        $(this).css('width','18rem');
        $(this).css('background-color', 'white');
        
    });
});
$('#btnBuscar').click(function(){
 $('#btnBuscar').fadeOut('slow', function(){
     $('#btnBuscar').fadeIn('slow');
 });
})

$('.btn-add').click(function(){
 $('.btn-add').fadeOut('slow').fadeIn('fast');
})

$('.cart').click(function(){
 $('#products-id').toggle();
})

$(".close-btn").click(function () {     
 $("#products-id").fadeOut('slow');
});







