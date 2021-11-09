export class FuncionesParticipantes{
// Funcion para esconder el contenedor 1, actualiza el contenedor 2 con el array
// Esconde los botones  de eliminar y confirmar
    mostrarParticipantes(array){
        $("#contenedor1").fadeOut(1000);
        $("#contenedorParticipantes").empty()
        array.forEach(elemento => {
            let valor= elemento.nombre +"  Cuenta con un saldo de: $"+ (elemento.saldo).toFixed(2);
            $("#contenedorParticipantes").append(
                `
                <div class="card">
                    <div class="card-body">
                        <li class = "listaParticipantes card-title">${valor}</li>
                    </div>
                </div> `)
        });
        $("#contenedor2").show()
        $("#contenedor3").show()
        $("#btnEliminar").hide();
        $("#btnConfirmar").hide()
    }
// Funcion para crear objeto Participante y pushearlo al array, tambien vacia el input
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
// Funcion para Actualizar la lista de los participantes de la agenda de gastos 
    crearLista(array){
        $("#contenedorParticipantes").empty();
        array.forEach(elemento => {
            let valor= elemento.nombre +"  Cuenta con un saldo de: $"+ (elemento.saldo).toFixed(2);
            $("#contenedorParticipantes").append(
                `
            <div class="card">
                <div class="card-body">
                    <li class = "listaParticipantes card-title">${valor}</li>
                </div>
            </div>
            `)
        });
        $("#contenedor2").show();
    }  
}