let numero = parseInt(prompt("Por favor ingresa un numero"));
    
    
  
    for(let i = 0; i<numero; i++)
     {
        if(i % 2 == 0){
        console.log(`${i} es par`);
        }
        else{
      console.log(`${i} es impar`);
        }
      
    
    } 
    console.log("tabla: ");
    for(let i =0;i<numero; i++){
    console.log(`${numero} X ${i} = ${numero*i}`);
    
    }

const pass = "kiwi";
let passUsuario;
do {
 passUsuario = prompt("Ingrese una fruta");
 if (passUsuario === ""){
     alert("Debes ingresar alguna");
     continue;
 }
 if(!isNaN(passUsuario)){
     alert("No puede ingresar un numero");
     continue;
 }
 console.log("Ingresaste: "+ passUsuario);

} while (passUsuario !== pass)
alert("Bien ahi ^^,");
console.log("encontrado  (=");