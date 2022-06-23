

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
            console.info(`El precio de ${producto} es de $${precio} pesos y en cuotas de $${cuotas} y con impuesto de ${impuesto12}% queda en ${total}`)
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