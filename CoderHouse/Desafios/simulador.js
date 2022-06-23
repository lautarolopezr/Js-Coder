/* 
>> Consigna: Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador. A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
Utilizar funciones para realizar esas operaciones.
>>Aspectos a incluir en el entregable:
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador
>>Ejemplo:
Calcular costo total de productos y/o servicios seleccionados por el usuario.
Calcular pagos en cuotas sobre un monto determinado.
Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.
Calcular edad promedio de personas registradas.
Calcular nota final de alumnos ingresados.
*/


// const cuotas = (producto = prompt("Ingrese el producto")) =>{
//     if (!producto){
//         console.error("Ingrese un producto")
//     }


//     const precio = prompt("Ingrese el precio de " + producto)
//     const cuotas = prompt("Ingrese las cuotas")


//impuesto = precio * impuesto3 / 100
//     total = precio + impuesto
 // cuotas
//     total = total.toFixed(2)

//     alert(`El precio de ${producto} es $${precio} pesos y en ${cuotas} cuotas es $${total} pesos`)
// }

// cuotas();




const cuotasv2 = (n = prompt("Ingrese la cantidad de productos a ingresar")) =>{

    const impuesto3 = 0 , impuesto6 = 10 , impuesto9 = 25 , impuesto12= 40 , impuesto18 = 60;
    let impuesto = 0

    for (i=1 ; i<=n ; i++){
        
        const producto = prompt("Ingrese el producto a ingresar nro " + i)
        let cuotas = prompt ("Ingrese cuotas")
        cuotas = parseInt(cuotas)
        let precio = prompt(`Ingrese precio de ${producto}`)
        precio = parseInt(precio)
        switch (cuotas)
        {
            case 3:
            impuesto = precio * impuesto3 / 100    
            total = precio + impuesto
            total = total.toFixed(2)
            console.info(`El precio de ${producto} es de $${precio} pesos y en cuotas de ${cuotas} y con impuesto de ${impuesto3}% queda en $${total}`)
            break;
    
            case 6:
            impuesto = precio * impuesto6 / 100    
            total = precio + impuesto
            total = total.toFixed(2)
            console.info(`El precio de ${producto} es de $${precio} pesos y en cuotas de ${cuotas} y con impuesto de ${impuesto6}% queda en $${total}`)
            break;
    
            case 9:
            impuesto = precio * impuesto9 / 100    
            total = precio + impuesto
            total = total.toFixed(2)
            console.info(`El precio de ${producto} es de $${precio} pesos y en cuotas de ${cuotas} y con impuesto de ${impuesto9}% queda en $${total}`)
            break;
    
            case 12:
            impuesto = precio * impuesto12 / 100
            console.log(impuesto)    
            total = precio + impuesto
            total = total.toFixed(2)
            console.info(`El precio de ${producto} es de $${precio} pesos y en cuotas de ${cuotas} y con impuesto de ${impuesto12}% queda en ${total}`)
            break;
    
            case 18:
            impuesto = precio * impuesto18 / 100    
            total = precio + impuesto
            total = total.toFixed(2)
            console.info(`El precio de ${producto} es de $${precio} pesos y en cuotas de ${cuotas} y con impuesto de ${impuesto18}% queda en $${total}`)
            break;

            default:
                console.error("Ingrese un numero tal 3 6 9 12 18")
        }
    }
    
}

cuotasv2();