import {General} from "./Class/General.js"
import {Participante} from "./Class/Participantes.js"
import {Gasto} from "./Class/Gastos.js"
import {Funciones} from "./Class/Funciones.js"


let general = new General();
let funciones = new Funciones();
let opcion;

// Siempre y cuando no haya participantes en el local Storage,
// Se le permitira al Usuario ingresar nombres de las personas que formaran parte de la agenda,
// Dando la opcion de repetir el proceso,
// Si se confirma se arma una lista de los participantes y un boton para agregar gastos
general.personas= funciones.obtenerAlmacenados("Participantes")

if(general.personas.length !=0) {
    funciones.mostrarParticipantes(general.personas)
    }else{ 
        $("#btnAgenda").click(()=>{funciones.agregarParticipante(Participante, general)})
        $("#btnLista").click(()=>{funciones.crearLista(general.personas)});
    }


// Esto ya esta de mas pero no lo quiero borrar por que en esto me voy a apoyar para hacer la logica con los botones

// // Una vez cargados los datos de quienes participan en la agenda cargamos los datos de los gastos.
// do{
//     let tipo = prompt("De que fue el gasto");
//     let total= parseFloat(prompt("Cual fue el total del gasto"))
//     let quienPago = prompt(`Quien pago la totalidad \n ${funciones.mostrarParticipantes(general)} `);
//     quienPago=quienPago.toUpperCase();
//     let quienesDividen= [];
//     do{
//         let personaDividir= prompt(`Vaya Ingresando los nombres entre quienes que se divide la cuenta \n ${funciones.mostrarParticipantes(general)}`);
//         personaDividir= personaDividir.toUpperCase();
//         quienesDividen.push(personaDividir);
//         opcion= prompt("Quiere ingresar otro nombre? \nIngrese S o N");
//         opcion= opcion.toUpperCase();
//     }while(opcion =="S")

//     let gasto = new Gasto (idGasto, tipo, total, quienPago, quienesDividen);
//     general.gastos.push(gasto)
//     general.personas = funciones.asignarGasto(general.personas, quienPago, total, quienesDividen);
//     general.personas =funciones.dividirCuenta(general.personas, total, quienesDividen);
//     idGasto= idGasto++;
//     opcion = prompt("Desea Ingresar Otro gasto /n Ingrese S o N");
//     opcion= opcion.toUpperCase();
// }while(opcion == "S");






