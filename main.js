// import {General} from "./Class/General.js"
// import {Participante} from "./Class/Participantes.js"
// import {Gasto} from "./Class/Gastos.js"
// import {Funciones} from "./Class/Funciones.js"


// let general = new General();
// let funciones = new Funciones();
// let opcion;

// general.personas= funciones.obtenerAlmacenados("Participantes")

// if(general.personas.length !=0) {
//     funciones.mostrarParticipantes(general.personas)
//     }else{ 
//         $("#btnAgenda").click(()=>{funciones.agregarParticipante(Participante, general)})
//         $("#btnLista").click(()=>{funciones.crearLista(general.personas)});
//     }
const URLDolar= "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
$("#Desafio").prepend(`
            <input type="number" placeholder="Ingrese el saldo en pesos" id="inputDolar">
            <button id="btnDolar">Pasar a dolar</button>`)
$("#btnDolar").click(()=>{
    $.get(URLDolar, function (responsse, state){
        if(state ==="success"){
            alert("Envio Exitoso")
            let valorDolar= parseFloat(responsse[1].casa.compra);
            let valorInput= parseFloat($("#inputDolar").val());
            const conversion= valorInput / valorDolar;
            console.log(conversion)
            $("#Desafio").append(`<h2>En dolares seria: ${conversion}</h2>`)
        }else alert("No se pudo realizar el pedido")
    })
})


const URLUsuarios = "https://jsonplaceholder.typicode.com/posts/1/comments";
$("#placeHolder").append(`
                <br>
                <button id="btnUsuarios">Consultar Usuarios de Place Holder</button>`)
$("#btnUsuarios").click(()=>{
    $.get(URLUsuarios, function(responsee, state){
        console.log(responsee)
        if(state==="success"){
            let usuarios= responsee;
            usuarios.forEach(usuario => {
                $("#placeHolder").append(`<h2>Usuario numero ${usuario.id}</h2><h3>${usuario.email}</h3>`)});
        }
    })
})

const URLHarry= "http://hp-api.herokuapp.com/api/characters";
$("#Harry").append(`
                <br>
                <button id="btnHarry">Consultar personajes de Harry Potter</button>`)
$("#btnHarry").click(()=>{
    $.get(URLHarry, function(responsse, state){
        if(state==="success"){
            let personajes=responsse;
            personajes.forEach(personaje=>{
                $("#Harry").append(`
                <div>
                    <h2>${personaje.name}</h2>
                    <img src="${personaje.image}" alt="">
                    <p>Actor: ${personaje.actor}</p>
                    <p>Fecha de nacimiento: ${personaje.dateOfBirth}
                </div>`)
            })
        }
    })
})