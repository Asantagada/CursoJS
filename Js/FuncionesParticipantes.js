export class FuncionesParticipantes{
// Mediante esta funcion mostramos los participantes con su saldo hasta el momento
// Y el boton que permite agregar gastos 
    mostrarParticipantes(array){
        $("#contenedor1").fadeOut(1000);
        $("#contenedorParticipantes").empty()
        array.forEach(elemento => {
            let valor= elemento.nombre +"  Cuenta con un saldo de: $"+ elemento.saldo;
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
// Funcion para crear la lista de los participantes de la agenda de gastos 
    crearLista(array){
        $("#contenedorParticipantes").empty();
        array.forEach(elemento => {
            let valor= elemento.nombre +"  Cuenta con un saldo de: $"+ int(elemento.saldo);
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