
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
alert("Bienvenido a la calculadora Online")

do{
    let nombre= prompt("Ingresa el nombre de un participante de los gastos");
    let participante = new Participante(idPart, nombre, saldo);
    idPart = idPart ++;
    general.personas.push(participante);
    opcion = prompt("Desea Ingresar Otro participante /n Ingrese S o N");
} while(opcion == "S");

do{
    let tipo = prompt("De que fue el gasto");
    let total= parseFloat(prompt("Cual fue el total del gasto"))
    let quienPago = prompt("Quien pago la totalidad");
    let quienesDividen= [];
    do{
        let personaDividir= prompt("Vaya Ingresando los nombres entre quienes que se divide la cuenta");
        quienesDividen.push(personaDividir);
        opcion= prompt("Quiere ingresar otro nombre? \nIngrese S o N");
    }while(opcion =="S")

    let gasto = new Gasto (idGasto, tipo, total, quienPago, quienesDividen);
    general.gastos.push(gasto)
    general.personas = funciones.asignarGasto(general.personas, quienPago, total);
    general.personas =funciones.dividirCuenta(general.personas, total, quienesDividen);
    idGasto= idGasto++;
    opcion = prompt("Desea Ingresar Otro gasto /n Ingrese S o N");
}while(opcion == "S");

funciones.mostrar(general)