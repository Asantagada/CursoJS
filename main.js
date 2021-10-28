import {General} from "./Js/General.js"
import {Participante} from "./Js/Participantes.js"
import {Gasto} from "./Js/Gastos.js"
import {FuncionesGastos} from "./Js/FuncionesGastos.js"
import {FuncionesParticipantes} from "./Js/FuncionesParticipantes.js"
import {FuncionesAlmacenados} from "./Js/FuncionesAlmacenados.js"
import {FuncionesApis} from "./Js/FuncionesApis.js"
import {FuncionesGenerales} from "./Js/FuncionesGenerales.js"

const URLDolar= "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
let general = new General();
let funcionesGastos= new FuncionesGastos();
let funcionesParticipantes= new FuncionesParticipantes();
let funcionesAlmacenados= new FuncionesAlmacenados();
let funcionesApis= new FuncionesApis();
let funcionesGenerales= new FuncionesGenerales();


// Inicia escondiendo determinados elementos del html para evitar que se carguen datos en orden incorrecto
$("#contenedor2").hide();
$("#contenedor3").hide();
$("#contenedor4").hide()
// Primero revisa el local storage para chequear si ya hay partipantes y gastos anteriores
general.personas= funcionesAlmacenados.obtenerAlmacenados("Participantes")
general.gastos = funcionesAlmacenados.obtenerAlmacenados("Gastos");
// En caso de que haya datos anteriores tanto de gastos como participantes, los mismos se cargan
// en el html y dan paso a cargar nuevos gastos directamente en el html y en los array correspondientes
if(general.personas.length !=0  ) {
    funcionesParticipantes.mostrarParticipantes(general.personas);
    if(general.gastos.length!=0){
        $("#btnGasto").show();
        funcionesGastos.cargarContenedor(general.gastos, "#gastosAnteriores")
    }
}
// Luego se habilitan los botones para crear agregar participantes
$("#btnAgenda").click(()=>{funcionesParticipantes.agregarParticipante(Participante, general)})
$("#btnLista").click(()=>{funcionesParticipantes.crearLista(general.personas)})
$("#btnMoneda").click(()=>{funcionesApis.cambiarMoneda(URLDolar, general.personas)})
// Una vez que se hayan cargado participantes se muestran estos botones
// Para confirmar o repetir el proceso
$("#btnEliminar").click(()=>{funcionesGenerales.eliminarLista(general.personas, "#contenedorParticipantes")})
$("#btnConfirmar").click(()=>{funcionesParticipantes.mostrarParticipantes(general.personas), 
                funcionesAlmacenados.almacenarElementos("Participantes", general.personas)})
// Una vez cargados los participantes y almacenados, se muestra el boton para agregar gastos
$("#btnGasto").click(()=>{funcionesGastos.determinarGasto(general.personas)});
// Al hacer click abre un formulario con un boton que obtiene los valores y muestra los resultados
$("#btnMostrarGasto").click(()=>{funcionesGastos.mostrarGasto(Gasto, general)});
// Una vez mostrado el gasto se muestran los 2 botones para repetir el proceso o confirmar
$("#btnCancelarGasto").click(()=>{funcionesGenerales.eliminarLista(general.gastos[0].quienesDividen, "#contenedorGastos")});
$("#btnConfirmarGasto").click(()=>{funcionesGastos.confirmarGasto(general.gastos, general.personas)})



