//Pedir un numero por prompt , repetir la salida del mensaje
// hola la cantidad de veces ingresada

const hola = (n = prompt("Ingresa cantidad de veces")) =>{
    if (n === ""){
        console.error("Ingresa un numerro")        
    }


    for (i=1;i<=n;i++){
        console.info("Hola")
    }
}

hola();