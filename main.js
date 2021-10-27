import {General} from "./Class/General.js"
import {Participante} from "./Class/Participantes.js"
import {Gasto} from "./Class/Gastos.js"
import {Funciones} from "./Class/Funciones.js"

// Falta pasar todo al html limpio e ir agregando estilos mediante display none, una vez hecho eso 
// vamos a utilizar las mismas funciones pero con los elementos ya renderizados
let general = new General();
let funciones = new Funciones();
$("#contenedor2").hide();
$("#contenedor3").hide();
$("#contenedor4").hide()
// $("#contenedor2").show();
general.personas= funciones.obtenerAlmacenados("Participantes")
general.gastos = funciones.obtenerAlmacenados("Gastos");
console.log(general.gastos)

if(general.personas.length !=0  ) {
    funciones.mostrarParticipantes(general.personas);
    if(general.gastos.length!=0){
        $("#btnGasto").show();
        funciones.cargarContenedor(general.gastos, "#gastosAnteriores")
    }
}
$("#btnAgenda").click(()=>{funciones.agregarParticipante(Participante, general)})
$("#btnLista").click(()=>{funciones.crearLista(general.personas)})
// Una vez que se hayan cargado participantes se muestran estos botones
// Para confirmar o repetir el proceso
$("#btnEliminar").click(()=>{funciones.eliminarLista(general.personas, "#contenedorParticipantes")})
$("#btnConfirmar").click(()=>{funciones.mostrarParticipantes(general.personas), 
                            funciones.almacenarElementos("Participantes", general.personas)})

// Una vez cargados los participantes y almacenados, se muestra el boton para agregar gastos
$("#btnGasto").click(()=>{funciones.determinarGasto(general.personas)});
// Al hacer click abre un formulario con un boton que obtiene los valores y muestra los resultados
$("#btnMostrarGasto").click(()=>{funciones.mostrarGasto(Gasto, general)});
// Una vez mostrado el gasto se muestran los 2 botones para repetir el proceso o confirmar
$("#btnCancelarGasto").click(()=>{funciones.eliminarLista(general.gastos[0].quienesDividen, "#contenedorGastos")});
$("#btnConfirmarGasto").click(()=>{funciones.confirmarGasto(general.gastos, general.personas)})
// $("#btnCancelarGasto").click(()=>{console.log(general.gastos[0].idGasto)})


// const URLDolar= "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
// $("#Desafio").prepend(`
//             <input type="number" placeholder="Ingrese el saldo en pesos" id="inputDolar">
//             <button id="btnDolar">Pasar a dolar</button>`)
// $("#btnDolar").click(()=>{
//     $.get(URLDolar, function (responsse, state){
//         if(state ==="success"){
//             alert("Envio Exitoso")
//             let valorDolar= parseFloat(responsse[1].casa.compra);
//             let valorInput= parseFloat($("#inputDolar").val());
//             const conversion= valorInput / valorDolar;
//             console.log(conversion)
//             $("#Desafio").append(`<h2>En dolares seria: ${conversion}</h2>`)
//         }else alert("No se pudo realizar el pedido")
//     })
// })


// const URLUsuarios = "https://jsonplaceholder.typicode.com/posts/1/comments";
// $("#placeHolder").append(`
//                 <br>
//                 <button id="btnUsuarios">Consultar Usuarios de Place Holder</button>`)
// $("#btnUsuarios").click(()=>{
//     $.get(URLUsuarios, function(responsee, state){
//         console.log(responsee)
//         if(state==="success"){
//             let usuarios= responsee;
//             usuarios.forEach(usuario => {
//                 $("#placeHolder").append(`<h2>Usuario numero ${usuario.id}</h2><h3>${usuario.email}</h3>`)});
//         }
//     })
// })

// const URLHarry= "http://hp-api.herokuapp.com/api/characters";
// $("#Harry").append(`
//                 <br>
//                 <button id="btnHarry">Consultar personajes de Harry Potter</button>`)
// $("#btnHarry").click(()=>{
//     $.get(URLHarry, function(responsse, state){
//         if(state==="success"){
//             let personajes=responsse;
//             personajes.forEach(personaje=>{
//                 $("#Harry").append(`
//                 <div>
//                     <h2>${personaje.name}</h2>
//                     <img src="${personaje.image}" alt="">
//                     <p>Actor: ${personaje.actor}</p>
//                     <p>Fecha de nacimiento: ${personaje.dateOfBirth}
//                 </div>`)
//             })
//         }
//     })
// })