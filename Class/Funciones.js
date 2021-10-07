
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
        const contenedor1= document.getElementById("contenedor1");
        contenedor1.innerHTML= " "
        let mensaje =document.createElement("h2");
        let contenido="Recuerde que los Participantes de esta agenda son: ";
        mensaje.innerHTML=contenido;
        contenedor1.appendChild(mensaje);
        array.forEach(elemento => {
            let elementoLista = document.createElement("li");
            let valor= ".-" + elemento.nombre +"  Cuenta con un saldo de: "+ elemento.saldo;
            elementoLista.innerHTML = valor
            contenedor1.appendChild(elementoLista)
        });
        const contenedor2 =document.getElementById("contenedor2");
        contenedor2.innerHTML= " "
        let botonGasto =document.createElement("button");
        botonGasto.id= "btnGasto";
        botonGasto.innerHTML= "Haga click para agregar un nuevo gasto";
        contenedor2.appendChild(botonGasto);
        botonGasto.addEventListener("click",()=>this.respuestaBtnGasto(array));
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
    eliminarLista(array){
        let arrayVacio= array.splice(0, array.length);
        const contenedor= document.getElementById("contenedor2");
        contenedor.innerHTML= " ";
        return array = arrayVacio;
    }
    // Funcion para crear la lista de los participantes de la agenda de gastos con los botones para confirmar y retroceso
    crearLista(array){
        const contenedor= document.getElementById("contenedor2");
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
        btnEliminar.innerHTML= "Repetir Proceso";
        let btnConfirmar= document.createElement("button");
        btnConfirmar.innerHTML ="Confirmar";
        btnConfirmar.id ="btnConfirmar";
        contenedor.appendChild(btnEliminar);
        contenedor.appendChild(btnConfirmar);
        const botonConfirmar= document.getElementById("btnConfirmar");
        botonConfirmar.addEventListener("click", ()=> {this.mostrarParticipantes(array), this.almacenarParticipantes("Participantes", array)})
        const botonEliminar =document.getElementById("btnEliminar")
        botonEliminar.addEventListener("click", ()=>{this.eliminarLista(array)});
    }
    // Funcion para el boton de agregar participante
    respuestaClickAgenda(clase1, general){
        let nombre= " ";
        let saldo= 0;
        let idPart = 1
        nombre= document.getElementById("inputAgenda").value;
        nombre= nombre.toUpperCase()
        let participante = new clase1 (idPart, nombre, saldo);
        idPart = idPart ++;
        general.personas.push(participante);
        const inputaLimpiar= document.getElementById("inputAgenda");
        inputaLimpiar.value= " "
    }
    crearCheckbox(array){    
        let contenido= " "    
        array.forEach(persona=>{
            contenido = `<label for="checkbox"><input type="checkbox">${persona.nombre}</label>`;
            contenido+=contenido
        })
        return contenido
    }
    respuestaBtnGasto(personas){
        const form=document.createElement("form");
        let contenido= `
            <input type="text" placeholder="De que fue el gasto: " id ="tipoGasto">
            <br>
            <input type="number" placeholder="Cual es el total del gasto: " id ="totalGasto">
            <br>
            <label id ="checkbox1">Quien pago la totalidad del gasto</label>
            <br>
            ${this.crearCheckbox(personas)}
            <br>            
            <label id ="checkbox2">Entre quienes se divide el gasto</label>
            <br>
            ${this.crearCheckbox(personas)}
            <input type="submit" placeholder="Listo">
            <br>`;
        form.innerHTML= contenido;
        form.id= "formularioGasto";
        const contenedor3= document.getElementById("contenedor3")
        contenedor3.appendChild(form);
    }
    
}

