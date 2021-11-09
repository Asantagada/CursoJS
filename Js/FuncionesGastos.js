import {FuncionesGenerales} from "./FuncionesGenerales.js"
import {FuncionesParticipantes} from "./FuncionesParticipantes.js"
import {FuncionesAlmacenados} from "./FuncionesAlmacenados.js"

let funcionesGenerales= new FuncionesGenerales();
let funcionesParticipantes= new FuncionesParticipantes();
let funcionesAlmacenados= new FuncionesAlmacenados();



export class FuncionesGastos{
// Funcion para cargar los gastos anteriores en el Footer, diferenciando si es un Array o no
    cargarContenedor(array, contenedor){
        if(array.length>0){
            array.forEach(gasto=>{
                $(contenedor).prepend(
                ` 
                <div class="card">
                    <div class="card-body">
                        <li class="card-title card-bottom">Tipo de gasto: ${gasto.tipoGasto}</li>
                        <li class="card-title card-bottom">Total del gasto: $${gasto.totalGasto}</li>
                        <li class="card-title card-bottom">Quien pago: ${gasto.quienPago}</li>
                        <li class="card-title card-bottom">Quienes Dividen: ${gasto.quienesDividen}</li>
                    </div>
                </div> 
                `)}
            )
        }else{
            $(contenedor).prepend(`
            <div class="card">
                <div class="card-body">
                    <li class="card-title card-bottom">Tipo de gasto: ${array.tipoGasto}</li>
                    <li class="card-title card-bottom">Total del gasto: ${array.totalGasto}</li>
                    <li class="card-title card-bottom">Quien pago: ${array.quienPago}</li>
                    <li class="card-title card-bottom">Quienes Dividen: ${array.quienesDividen}</li>
                </div>
            </div> 
                    `)
        }
    }
// Funcion para mostrar el formulario de gastos, creando opciones de checkbox y select mediante
// los participantes ingresados
    determinarGasto(array){
        $("#quienPago").empty();
        $("#checkboxEntreQuienes").empty();
        $("#quienPago").append(`${funcionesGenerales.crearOpciones(array)}` );         
        $("#checkboxEntreQuienes").append(`${funcionesGenerales.crearCheckbox(array)}`);
        $("#contenedor4").show();
        $("#contenedorGastos").hide();
        $("#formularioGasto").show();
        $("#btnConfirmarGasto").hide();
        $("#btnCancelarGasto").hide();
        $("#descGasto").show();
    }
// Se muestra el gasto y las opciones de confirmar o repetir
    mostrarGasto(clase1,general){
        $("#contenedorGastos").empty();
        let idGasto= 1;
        const tipoGasto= $("#tipoGasto").val();
        const iTotal =$("#totalGasto");
        let totalGasto= parseFloat(iTotal.val());  
        if(totalGasto != "NaN"){ 
            const quienPago= $("#quienPago").val();
            let quienesDividen= [];
            const valorCheckbox = $("input[type=checkbox]:checked").map(function () {
                                return quienesDividen.push($(this).val())
                                })
            $("#formularioGasto").hide();
            $("#contenedorGastos").prepend(`
                    <li>Tipo de gasto:${tipoGasto}</li>
                    <li>Total del gasto: ${totalGasto}</li>
                    <li>Quien pago: ${quienPago}</li>
                    <li>Quienes Dividen: ${quienesDividen}</li>
                    `);
            $("#contenedorGastos").show();
            $("#btnConfirmarGasto").show();
            $("#btnCancelarGasto").show();
            let gasto = new clase1 (idGasto, tipoGasto, totalGasto, quienPago, quienesDividen);
            general.gastos.push(gasto)
            idGasto= idGasto++;
        }else{
            alert("El total debe ser un numero"); 
        }                   
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
        let ultimaPosicion=gastos.length-1;
        $("#contenedor4").hide()
        this.asignarGasto(gastos[ultimaPosicion],personas);
        this.dividirCuenta(gastos[ultimaPosicion], personas);
        funcionesParticipantes.mostrarParticipantes(personas);
        this.cargarContenedor(gastos[ultimaPosicion],"#gastosAnteriores");
        localStorage.clear();
        funcionesAlmacenados.almacenarElementos("Participantes", personas);
        funcionesAlmacenados.almacenarElementos("Gastos", gastos);
    }

}