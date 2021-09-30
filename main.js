import {General} from "./Class/General.js"
import {Participante} from "./Class/Participantes.js"
import {Gasto} from "./Class/Gastos.js"
import {Funciones} from "./Class/Funciones.js"


let general = new General();
let funciones = new Funciones();
let idPart = 1;
let idGasto = 1;
let opcion;
let saldo= 0;

alert("Bienvenido a la calculadora Online");
// Primero le pedimos al usuario que registre a todos los participantes de 
// la agenda de gastos y utilizamos la clase participante para generarlos con id, nombre y saldo.
// Siempre y cuando no halla personas ya registradas, en ese caso se registran nuevos gastos a dividir.
// localStorage.clear()
if(localStorage.length !=0) {
    funciones.obtenerAlmacenados("Participantes", general.personas);
    alert(funciones.mostrarParticipantes(general))
    }else{ 
    do{
        let nombre= prompt("Ingresa el nombre de un participante de los gastos");
        nombre= nombre.toUpperCase();
        let participante = new Participante(idPart, nombre, saldo);
        idPart = idPart ++;
        general.personas.push(participante);
        opcion = prompt("Desea Ingresar Otro participante \nIngrese S o N");
        opcion= opcion.toUpperCase();
    } while(opcion == "S");
}
funciones.crearLista(general.personas)


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




localStorage.clear();
funciones.mostrar(general);
funciones.almacenarParticipantes("Participantes", general.personas)


