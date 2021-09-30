

// Tenemos las plantillas de las distintas funciones que vamos a utilizas
export class Funciones{
    // Esta funcion asigna el gasto y actualiza el saldo de quien pago la totalidad del gasto
    asignarGasto(personas, nombre, total, quienesDividen){
    personas.forEach(element => {
        if(element.nombre == nombre){
            element.saldo -= total/(quienesDividen.length+1);
        };
    });

    return personas;
};
// Esta funcion asigna el gasto y actualiza el saldo de las demas personas que componen el gasto
    dividirCuenta( personas, total, quienesDividen){
    let gastoPerCapita= parseFloat(total/(quienesDividen.length + 1));
    quienesDividen.forEach(element=> {
        personas.forEach(e=> {
            if (element == e.nombre){
                console.log(e.saldo)
                e.saldo += gastoPerCapita;
            }
        })
    })
    return personas;
    
    }
// Esta funcion simplemente muestraLos gastos realizados hasta el momento y las personas que componen la agenda de gastos
    mostrar(general){
        general.gastos.forEach(gasto => {
            console.log(gasto)
        });
        general.personas.forEach(personas =>{
            console.log(personas)
        })
    }
// Mediante esta funcion mostramos los participantes con su saldo hasta el momento
    mostrarParticipantes(general){
        let listaParticipantes = `Recuerde que los Participantes de esta agenda son: \n`;
        general.personas.forEach(participante=> {
            listaParticipantes+=  ".-" + participante.nombre + ": "+ participante.saldo + "\n";
        })
        return listaParticipantes
    }
    
    almacenarParticipantes(clave, valor){
        const aAlmacenar= JSON.stringify(valor)
        localStorage.setItem(clave, aAlmacenar)
    }



    obtenerAlmacenados(clave, elementos){
        const almacenados = JSON.parse(localStorage.getItem(clave));
        for (const almacenado of almacenados){
            elementos.push(almacenado)
        }  
    }

    crearLista(array){
        let mensaje =document.createElement("h2");
        let contenido="Las personas que forman parte de esta agenda son: ";
        mensaje.innerHTML=contenido;
        document.body.appendChild(mensaje);
        array.forEach(elemento => {
            let elementoLista = document.createElement("li");
            let valor= elemento.nombre;
            elementoLista.innerHTML = valor
            document.body.appendChild(elementoLista)
        });
    }
}