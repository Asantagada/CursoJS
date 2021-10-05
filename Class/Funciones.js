
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

// Mediante esta funcion mostramos los participantes con su saldo hasta el momento
    mostrarParticipantes(array){
        const contenedor= document.getElementById("contenedor1");
        contenedor.innerHTML= " "
        let mensaje =document.createElement("h2");
        let contenido="Recuerde que los Participantes de esta agenda son: ";
        mensaje.innerHTML=contenido;
        contenedor.appendChild(mensaje);
        array.forEach(elemento => {
            let elementoLista = document.createElement("li");
            let valor= ".-" + elemento.nombre +"  Cuenta con un saldo de: "+ elemento.saldo;
            elementoLista.innerHTML = valor
            contenedor.appendChild(elementoLista)
        });
    }
    // Funcion para guardar en el storage
    almacenarParticipantes(clave, valor){
        const aAlmacenar= JSON.stringify(valor)
        localStorage.setItem(clave, aAlmacenar)
    }
// Funcion para obtener los almacenados
    obtenerAlmacenados(clave){
        const almacenados = JSON.parse(localStorage.getItem(clave));
        const elementos =[];
        for (const almacenado of almacenados){
            elementos.push(almacenado)
        }  return elementos;
    }
    // Funcion para crear la lista de los participantes de la agenda de gastos con los botones para confirmar y retroceso
    crearLista(array){
        const contenedor= document.getElementById("contenedor1");
        let mensaje =document.createElement("h2");
        let contenido="Las personas que forman parte de esta agenda son: ";
        mensaje.innerHTML=contenido;
        contenedor.appendChild(mensaje);
        array.forEach(elemento => {
            let elementoLista = document.createElement("li");
            let valor= elemento.nombre +"   Cuenta con un saldo de: "+ elemento.saldo;
            elementoLista.innerHTML = valor
            contenedor.appendChild(elementoLista)
        });
        const espacio= document.createElement("br");
        contenedor.appendChild(espacio)
        const btnEliminar= document.createElement("button");
        btnEliminar.id= "btnEliminar";
        btnEliminar.innerHTML= "Repetir Proceso"
        let btnConfirmar= document.createElement("button");
        btnConfirmar.innerHTML ="Confirmar";
        btnConfirmar.id ="btnConfirmar";
        contenedor.appendChild(btnEliminar);
        contenedor.appendChild(btnConfirmar);
        const botonConfirmar= document.getElementById("btnConfirmar");
        botonConfirmar.addEventListener("click", ()=> {this.mostrarParticipantes(array), this.almacenarParticipantes("Participantes", array)})
    
    }
    // Funcion para el boton de agregar participante
    respuestaClickAgenda(clase1, general){
        let nombre= " ";
        let saldo= 0;
        let idPart = 1
        nombre= document.getElementById("inputAgenda").value;
        nombre= nombre.toUpperCase()
        let participante = new clase1 (idPart, nombre, saldo);
        console.log(participante)
        idPart = idPart ++;
        general.personas.push(participante);
        const inputaLimpiar= document.getElementById("inputAgenda");
        inputaLimpiar.value= " "
    }
            
}

