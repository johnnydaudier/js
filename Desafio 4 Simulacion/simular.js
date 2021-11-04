    let flag = true;
    let mayor =0;
    let contador=0;
    let porcentaje=0;
    
   


    const elegirProducto = () => {
    let selected = prompt("Ingresa el electrodomestico que estas buscando, opciones: cocina, lavarropas o heladera");
    
    switch(selected){
        case "cocina":
            return alert("Perfecto, buscaremos cocina");
            
            break;
        case "lavarropas":
            return alert("Perfecto, buscaremos lavarropas");
            
            break;
        case "heladera":
            return alert("Perfecto, buscaremos heladera");
            
            break;
        default: 
            return alert("No elegiste ningun producto, las opciones son: cocina, heladera y lavarropas"); 
                              
            break;
        }

                
    }
    function getNumero() {
        return Math.random();
    }
    const buscarPrecios = (cant) =>{
        for(let i = 0; i<cant; i++){
            
            
            porcentaje = getNumero()*10000;
            console.log(porcentaje);
            
            if(flag){
                mayor = porcentaje;
                flag = false;
            }
            else if(porcentaje>mayor){
                mayor = porcentaje;
            }
            contador++;


        }
    }

    const simular = () =>{
        elegirProducto();
        let precio1 = Number(prompt("Ingrese DESDE cuanto quiere gastar"));
        console.log("Monto1 ingresado: " + precio1);
        let precio2 = Number(prompt("Ingrese HASTA cuanto quiere gastar"));
        console.log("Monto2 ingresado: " + precio2);
        if(precio2 !=0){
            alert(`Perfecto, buscaremos tu producto entre ${precio1} y ${precio2}`);
    
        }
        else alert("El segundo monto no puede ser 0");
       
        let cantidad = Math.round(Number(prompt("Ingresa un numero para cantidad de resultados que te gustaria ver")));
        buscarPrecios(cantidad);

        
        alert(`Se encontraron ${contador} productos, el mas caro cuesta $ ${Math.round(porcentaje)}`);        

    }     
    
    document.getElementById("botonSimular").addEventListener("click", simular);