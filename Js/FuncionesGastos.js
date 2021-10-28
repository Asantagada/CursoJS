import {FuncionesGenerales} from "./FuncionesGenerales.js"
import {FuncionesParticipantes} from "./FuncionesParticipantes.js"
import {FuncionesAlmacenados} from "./FuncionesAlmacenados.js"

let funcionesGenerales= new FuncionesGenerales();
let funcionesParticipantes= new FuncionesParticipantes();
let funcionesAlmacenados= new FuncionesAlmacenados();



export class FuncionesGastos{
// Funcion para cargar los gastos anteriores
    cargarContenedor(array, contenedor){
        if(array.length<1){
            array.forEach(gasto=>{
                $(contenedor).prepend(`
                    <li>Id del gasto: ${gasto.idGasto}</li>
                    <li>Tipo de gasto:${gasto.tipoGasto}</li>
                    <li>Total del gasto: ${gasto.totalGasto}</li>
                    <li>Quien pago: ${gasto.quienPago}</li>
                    <li>Quienes Dividen: ${gasto.quienesDividen}</li>
                    `)
            })
        }else{
            $(contenedor).prepend(`
                    <li>Id del gasto: ${array[0].idGasto}</li>
                    <li>Tipo de gasto:${array[0].tipoGasto}</li>
                    <li>Total del gasto: ${array[0].totalGasto}</li>
                    <li>Quien pago: ${array[0].quienPago}</li>
                    <li>Quienes Dividen: ${array[0].quienesDividen}</li>
                    `)
        }
    }
// Funcion para mostrar el formulario de gastos, creando opciones de checkbox y select mediante
// los participantes ingresados
    determinarGasto(array){
        $("#quienPago").append(`${funcionesGenerales.crearOpciones(array)}` );         
        $("#checkboxEntreQuienes").append(`${funcionesGenerales.crearCheckbox(array)}`);
        $("#contenedor4").show();
        $("#btnConfirmarGasto").hide();
        $("#btnCancelarGasto").hide();
    }
// Se muestra el gasto y las opciones de confirmar o repetir
    mostrarGasto(clase1,general){
        let idGasto= 1;
        const tipoGasto= $("#tipoGasto").val();
        const iTotal =$("#totalGasto");
        let totalGasto= parseFloat(iTotal.val());
        const quienPago= $("#quienPago").val();
        let quienesDividen= [];
        const valorCheckbox = $("input[type=checkbox]:checked").map(function () {
                                return quienesDividen.push($(this).val())
                                })
        $("#formularioGasto").hide();
        $("#contenedorGastos").prepend(`
                    <li>Id del gasto: ${idGasto}</li>
                    <li>Tipo de gasto:${tipoGasto}</li>
                    <li>Total del gasto: ${totalGasto}</li>
                    <li>Quien pago: ${quienPago}</li>
                    <li>Quienes Dividen: ${quienesDividen}</li>
                    `)
        $("#btnConfirmarGasto").show();
        $("#btnCancelarGasto").show();
        let gasto = new clase1 (idGasto, tipoGasto, totalGasto, quienPago, quienesDividen);
        general.gastos.push(gasto)
        idGasto= idGasto++;                        
    }
// Esta funcion asigna el gasto y actualiza el saldo de quien pago la totalidad del gasto
    asignarGasto(gasto,personas){
        personas.forEach(element => {
            if(element.nombre == gasto.quienPago){
                element.saldo += gasto.totalGasto;
            };
        });
        return personas;
    }
// Esta funcion asigna el gasto y actualiza el saldo de las demas personas que componen el gasto
    dividirCuenta( gasto, personas){
        let gastoPerCapita= parseFloat(gasto.totalGasto/(gasto.quienesDividen.length));
        gasto.quienesDividen.forEach(element=> {
            personas.forEach(e=> {
                if (element == e.nombre){
                    e.saldo -= gastoPerCapita;
                }
            })
        })
        return personas;
    }
// Esta funcion asigna el gasto segun los datos dados, actualiza los saldos, limpia los datos del local storage
// y los actualiza con los nuevos valores
    confirmarGasto(gastos, personas){
        $("#contenedor4").hide()
        this.asignarGasto(gastos[0],personas);
        this.dividirCuenta(gastos[0], personas);
        funcionesParticipantes.mostrarParticipantes(personas);
        this.cargarContenedor(gastos,"#gastosAnteriores");
        localStorage.clear();
        funcionesAlmacenados.almacenarElementos("Participantes", personas);
        funcionesAlmacenados.almacenarElementos("Gastos", gastos)
    }

}