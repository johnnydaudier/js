const mail = document.getElementById("#inputEmail4");
const pw = document.getElementById("#inputPassword4");
const direccion = document.getElementById("#inputAddress");
const ciudad = document.getElementById("#inputCity");
const input = document.querySelector("input");

const evtChange = 'change';
const evtFocus = 'focus';
const evtClick = 'click';
const evtMouseOver = 'mouseover';
const boton = document.getElementById("#botonEnviar");
const body =  document.querySelector("body");
const h2Text = document.getElementById("#h2");
const label = document.querySelector("label");



function saludar() {
    alert("Bienvenido al formulario de registro :D");
}

function limpiarCampos() {
    mail.value = "";
    pw.value = "";
    direccion.value = "";
    ciudad.value = "";
}

function validarCampos() {
    if (mail.value.length === 0){
        mail.classList.add(`is-invalid`);
        alert(`el campo mail es requerido`);
        return false;
    }
    else {
        mail.classList.add('is-valid');
    }

    if(pw.value.length === 0){
        pw.classList.add('is-invalid');
        alert('el campo password es requerido');
        return false;
    }else{
        pw.classList.remove('is-invalid');
        pw.classList.add('is-valid');
    }
    if(direccion.value.length === 0){
        direccion.classList.add('is-invalid');
        alert('el campo direccion es requerido');
        return false;
    }
    else {
        direccion.classList.remove('is-invalid');
        direccion.classList.add('is-valid');
    }
    if(ciudad.value.length === 0){
        ciudad.classList.add('is-invalid');
        alert ('el campo ciudad es requerido');
        return false;
    }else {
        ciudad.classList.remove('is-invalid');
        ciudad.classList.add('is-valid');
    }
   return true; 
}
function resaltar() {
      this.target.style.color = "orange";
 }


window.onload(saludar());
boton.onclick = () => {
    validarCampos();
    limpiarCampos();
};
input.addEventListener(evtMouseOver, resaltar());
