
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
    }

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

    // Funcion para guardar en el storage
    almacenarParticipantes(clave, valor){
        const aAlmacenar= JSON.stringify(valor)
        localStorage.setItem(clave, aAlmacenar)
    }

    // Funcion para obtener los almacenados
    obtenerAlmacenados(clave){
        const almacenados = JSON.parse(localStorage.getItem(clave));
        const elementos =[];
        if (almacenados != undefined){
            for (const almacenado of almacenados){
            elementos.push(almacenado)
            }     
        }return elementos;
    }
    animarBoton(id){
        $(`${id}`).animate({
                            "font-size":"30px",
                            "border-width":"10px",
                            "margin":"20px",
                            "height":"60px"
                        },"fast")
                .delay(2000)
                .animate({
                    "border-width":"2px",
                    "margin":"0px",
                    "height":"21px",
                    "font-size":"13px"
                })
    }

    // Mediante esta funcion mostramos los participantes con su saldo hasta el momento
    mostrarParticipantes(array){
        $("#contenedor1").fadeOut(1000);
        $("#contenedor2").empty()
        let contenido="Recuerde que los Participantes de esta agenda son: ";
        $("#contenedor2").append(`<h2>${contenido}</h2>`)
        array.forEach(elemento => {
            let valor= ".-" + elemento.nombre +"  Cuenta con un saldo de: "+ elemento.saldo;
            $("#contenedor2").append(`<li>${valor}</li>`)
        });
        let botonGasto= "Haga click para agregar un nuevo gasto";
        $("#contenedor3").append(`<br><button id= "btnGasto">${botonGasto}</button>`);
        $("#btnGasto").click(()=>{this.determinarGasto(array)});
        $("#btnGasto").hover(()=>{this.animarBoton("#btnGasto")})
    }
    // Funcion para vaciar un array
    eliminarLista(array){
        let arrayVacio= array.splice(0, array.length);
        $("#contenedor2").empty()
        return array = arrayVacio;
    }
    // Funcion para crear la lista de los participantes de la agenda de gastos con los botones para confirmar y retroceso
    crearLista(array){
        $("#contenedor2").empty();
        let contenido="Las personas que forman parte de esta agenda son: ";
        $("#contenedor2").append(`<h2>${contenido}</h2>`);
        array.forEach(elemento => {
            let valor= elemento.nombre +"   Cuenta con un saldo de: "+ elemento.saldo;
            $("#contenedor2").append(`<li>${valor}</li>`)
        });
        $("#contenedor2").append(`
            <button id="btnEliminar">Repetir Proceso</button>
            <button id="btnConfirmar">Confirmar</button>`
        );
        $("#btnConfirmar").click(()=>{this.mostrarParticipantes(array), this.almacenarParticipantes("Participantes", array)})
        $("#btnEliminar").click(()=>{this.eliminarLista(array)})

    }
    // Funcion para el boton de agregar participante
    agregarParticipante(clase1, general){
        let nombre= " ";
        let saldo= 0;
        let idPart = 1;
        nombre= $("#inputAgenda").val()
        nombre= nombre.toUpperCase();
        let participante = new clase1 (idPart, nombre, saldo);
        idPart = idPart ++;
        general.personas.push(participante);
        $("#inputAgenda").val(" ")
    }
    crearCheckbox(array){    
        let contenido=" "    
        array.forEach(persona=>{
            contenido +=`<label for="checkbox"><input type="checkbox">${persona.nombre}</label>`;
        })
        return contenido
    }
    crearOpciones(array){
        let contenido =" ";
        array.forEach(persona=>{
            contenido += `<option>${persona.nombre}</option>`
        })
        return contenido
    }
    determinarGasto(personas){
        $("#contenedor4").empty();
        $("#contenedor4").append(`
            <form id ="formularioGasto">
                <input type="text" placeholder="De que fue el gasto: " id ="tipoGasto">
                <br>
                <input type="number" placeholder="Cual es el total del gasto: " id ="totalGasto">
                <br>
                <label>Quien pago la totalidad del gasto: </label>
                <br>
                <select id="opcionesSelect">${this.crearOpciones(personas)}</select>
                <br>            
                <label id ="checkbox2">Entre quienes se divide el gasto:    </label>
                <br>
                ${this.crearCheckbox(personas)}
                <br>
                <input type="button" value="Listo" id="btnConfirmarGasto">
                <br>
            </form>`);
            $("#btnConfirmarGasto").click(()=>{this.crearGasto()})
    }

    crearGasto(){
        let tipo= $("#tipoGasto").val();
        let iTotal =$("#totalGasto");
        let total= parseFloat(iTotal.val());
        let quienPago= $("#quienPago").val();
        // Como hago para obtener valor de checkbox y
        console.log(tipo, total, quienPago)
    }

}

