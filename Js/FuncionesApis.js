import {FuncionesParticipantes} from "./FuncionesParticipantes.js";
let funcionesParticipantes= new FuncionesParticipantes();

export class FuncionesApis{
    // Funcion para hacer un pedido a la Api con valor del dolar y actualizar tanto el array
    // como el contenedor que corresponde
    cambiarMoneda(URL, personas){
        $.get(URL, function (responsse, state){
            if(state==="success"){
                let valorDolar = parseFloat(responsse[1].casa.compra);
                personas.forEach(persona=>{
                    let saldoActualizado= persona.saldo/valorDolar;
                    persona.saldo= saldoActualizado;
                    
                })
                funcionesParticipantes.mostrarParticipantes(personas)
            }else{
                alert("No se puede hacer la conversion en este momento")
            }
        })
    }
}