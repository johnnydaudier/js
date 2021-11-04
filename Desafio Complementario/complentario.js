let horas =0;
let precio = 0;
let n1=0;
let n2=0;
let n3=0;
let promedio =0;

const calcularSueldo = (cantHoras, precio) => {
  return cantHoras * precio;
}
const calcularPromedio = (n1,n2,n3) => {
    return (n1 + n2 + n3) / 3;
}
const calcularCondicion = () => {
   
   let txt;
    if(calcularPromedio>=7){
        txt = "El alumno PROMOCIONA la materia";
        console.log(txt);
    }
    else if(calcularPromedio>=4&&calcularPromedio<7){
        txt ="El alumno queda REGULAR en la materia";
        console.log(txt);
    }
    else {
        txt = "El alumno queda LIBRE de la materia";
        console.log(txt);
    }
    return txt;
}


const empezar = () =>{
    let input = Math.round(Number(prompt("Ingrese 1 para docente o 2 para alumno")));

if(input===1){
    alert("Ingresaste al sistema DOCENTE");
    console.log("Ingresada opcion 1");
    let inputDocente = Number(prompt("Ingresar 1 para calcular sueldo de docente o cancelar para SALIR"));
    if(inputDocente===1){
        let cantHoras = parseFloat(prompt("Ingrese cantidad de horas trabajadas por el docente"));
        let precio = parseFloat(prompt("Ingrese precio de la hora trabajada por el docente"));
        if(cantHoras === 0) {
            alert("Error, no se puede calcular con 0");
        }
        else if(precio === 0){
            alert("Error, no se puede calcular con 0");
           
        }else{
            alert("El sueldo del docente es de: $" +parseFloat(calcularSueldo(cantHoras, precio)));
        }
        
    }

     
}else if(input===2){
    alert("Ingresaste al sistema ALUMNO");
    console.log("Ingresada opcion 2");
    let inputAlu = Number(prompt("Ingresar 1 para mostrar PROMEDIO y CONDICION del alumno o cancelar para SALIR"));
    if(inputAlu===1){
        let n1 = Number(prompt("Ingresar la NOTA 1/3"));
        let n2 = Number(prompt("Ingresar la NOTA 2/3"));
        let n3 = Number(prompt("Ingresar la NOTA 3/3"));
        if(n1 !=0 && n2 !=0 && n3!=0){
            alert("El promedio del alumno es: " + parseFloat(calcularPromedio(n1,n2,n3),2)  + 
            " y su condicion actual es: "+ calcularCondicion());
        }
    }


}else alert("Error, unicas opciones validas:  1 y 2");
}

document.getElementById("miBoton").addEventListener("click", empezar);