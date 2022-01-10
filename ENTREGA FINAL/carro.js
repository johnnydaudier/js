class Producto {
    constructor(id_producto, nombre, precio, stock){
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.precio = parseFloat(precio);       
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


// VARIABLES UTILES
let totalAmount = 0;
let totalCart = document.querySelector('.price-total');
let contenedorProductos = document.querySelector('.products');
//capturamos el contenedor de carro
let contenedorCarro = document.querySelector('.card-items');
let contenedorEsc = document.querySelector('.esc');
let arrayCarro = [];
let contenidoLS = JSON.parse(localStorage.getItem('products'));
let cartAmount = document.querySelector('.productsCount');
let cartAccountant = 0;
// contenedorCarro.addEventListener('click', deleteProduct);
$(contenedorCarro).click(deleteProduct);
$(".btn-add").click(function(e){  
e.preventDefault(); 
let p = e.target.parentElement;
let selected = p.parentElement;
// console.log(selected);
    
insertProduct(selected);

});


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



function insertProduct(product){
    const newProduct = {
        imagen: product.querySelector('div img').src,
        titulo :  product.querySelector('.card-title').textContent,
        precio :  product.querySelector('.priceNum').textContent,
        idProducto : product.querySelector('.btn-add').getAttribute('prod-id'),
        cantidad : 1
    }

    totalAmount = parseFloat(totalAmount)+parseFloat(newProduct.precio);
    // totalAmount = totalAmount.toFixed(2);
    // validamos que no exista el producto en el carro
    const exist = arrayCarro.some(product => product.idProducto === newProduct.idProducto);
    if(exist){
        //existe, entonces mapeamos un nuevo arreglo para modificarlo
        let newArray = arrayCarro.map(product=> {
            if(product.idProducto===newProduct.idProducto){
                product.cantidad++;
                return product;
            }else{
                return product;
            }
        });
        arrayCarro = [...newArray];
    } else{
        //hacemos una copia del arraycarro y le sumamos el nuevo producto
        arrayCarro = [...arrayCarro, newProduct];
        cartAccountant++;
    }
    crearHTML();
}
    
   
   
    
    
//generamos el div para poder insertar el producto agregado 
function crearHTML() {
    limpiarCarro();
    arrayCarro.forEach(product => {
        const  {imagen, titulo, precio, idProducto, cantidad} = product;
        const row = document.createElement('div');
            // row.classList.add('card');
            
        row.innerHTML = `<img src="${imagen}" width="100px" height="100px" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${titulo}</h5>
            <h5 class="precio" style="color: #2c2a2c"> ${precio}</h5>
            <h4>Cantidad: ${cantidad} </h4>
            <button prod-id="${idProducto}" class="btn-primary deleted">⮿</button>
        </div>
        <hr>`;
        contenedorCarro.appendChild(row);
        totalCart.innerHTML = totalAmount.toFixed(3);
        cartAmount.innerHTML = cartAccountant;

    });
    localStorage.setItem('products', JSON.stringify(arrayCarro));
}
        
function limpiarCarro(){
    contenedorCarro.innerHTML = '';
}


function vaciarCarro() {
    localStorage.clear()
    arrayCarro = [];
    contenedorCarro.innerHTML = "";
    cartAmount.innerHTML = 0;
    totalCart.innerHTML = 0;

          
}
function guardarEnLS(){
    localStorage.setItem('productos', JSON.stringify(arrayCarro));
}


function deleteProduct(e){
    if(e.target.classList.contains('deleted')){
        let prodId = e.target.getAttribute('prod-id');
        arrayCarro.forEach(value => {
            if(value.idProducto === prodId){
                let priceMinus = parseFloat(value.precio) * parseFloat(value.cantidad);
                totalAmount = totalAmount - priceMinus;
                totalAmount.toFixed(3);

            }
        })
        arrayCarro = arrayCarro.filter(product => product.idProducto !== prodId);
        cartAccountant--;

    }
    crearHTML();
   
}

/////////////////////ANIMACIONES CON JQUERY/////////////////////////
$('#vaciarCarro').click(vaciarCarro);

$('div.card').mouseover(function () {     
    
    $(this).css('width','22rem');
    $(this).css('background-color', 'rgb(224, 162, 197)');
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




$('#btnConfirm').click(function () { 
    if(arrayCarro.length===0){
        swal("Sin productos no hay pedido ☹", "agrega productos al carrito para confirmar tu pedido!");
    }
    else{
        swal({
            title: "Pedido CONFIRMADO!",
            text: "En breve te contactaremos via mail!",
            icon: "success",
            button: "Gracias ♡!",
          });
    }
    
});



$(document).ready(function () {
    $('#btnValidar').attr('disabled', true);
});

let apiKey = "29021ac6e1ba433fe05044e476066519";
let mail = $('#txtMail').val();
let url = "http://apilayer.net/api/check?access_key="+apiKey+ "&email="+mail+"& smtp = 1  & format = 1";






$('#btnSuscribir').click(function () { 
    let txtMail = $('#txtMail').val();
    if(txtMail !== ""){
        let e = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let valid = e.test(txtMail);
        if(valid){
            $.get(url, (response, status) => {
                if(status === "success"){
                    let ok = '✓';                    
                    let btnValido = $('#btnValidar');
                    btnValido.text(ok);
                    btnValido.css('background-color', 'rgb(11, 221, 73)');
                    swal("Perfecto!", "Ya quedaste resigtrado!", "success");
                    

                }else{
                    swal("Algo salio mal", "comprueba la direccion de mail ingresada", "warning");
                }

            },
               
            );
        }else{
            swal('Por favor ingresa un mail correcto');
        }
        
            
    }else { 
        swal('Por favor ingresa un mail correcto');
    }
});

$(document).ready(function () {
    $('#btnEnviar').click(function () { 
        if($('#txtSugerencia').val()===""){
            
            swal("No pudismos enviar ☹", "Comprueba el campo sugerencias", "warning");
        }else{
            swal("Perfecto!", "Gracias por ayudarnos a mejorar", "success");
        }
         
     }); 
   
});

