export class Funciones{
// Funcion para obtener los almacenados
    obtenerAlmacenados(clave){
        const almacenados = JSON.parse(localStorage.getItem(clave));
        const elementos =[];
        if (almacenados != undefined){
            for (const almacenado of almacenados){
            elementos.push(almacenado)
            }     
        }return elementos;
    }
// Mediante esta funcion mostramos los participantes con su saldo hasta el momento
// Y el boton que permite agregar gastos 
    mostrarParticipantes(array){
        $("#contenedor1").fadeOut(1000);
        $("#contenedorParticipantes").empty()
        array.forEach(elemento => {
            let valor= ".-" + elemento.nombre +"  Cuenta con un saldo de: $"+ elemento.saldo;
            $("#contenedorParticipantes").append(`<li class = "listaParticipantes">${valor}</li>`)
        });
        $("#contenedor2").show()
        $("#contenedor3").show()
        $("#btnEliminar").hide();
        $("#btnConfirmar").hide()
    }
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
        console.log(array[0])
        }
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
// Funcion para guardar en el storage
    almacenarElementos(clave, valor){
        const aAlmacenar= JSON.stringify(valor)
        localStorage.setItem(clave, aAlmacenar)
    }
// Funcion para crear la lista de los participantes de la agenda de gastos con los 
// botones para confirmar y retroceso
    crearLista(array){
        $("#contenedorParticipantes").empty();
        array.forEach(elemento => {
            let valor= ".-" + elemento.nombre +"  Cuenta con un saldo de: $"+ elemento.saldo;
            $("#contenedorParticipantes").append(`<li class = "listaParticipantes">${valor}</li>`)
        });
        $("#contenedor2").show();
    }   
    // Funcion para vaciar un array
    eliminarLista(array,contenedor){
        let arrayVacio= array.splice(0, array.length);
        $(`${contenedor}`).empty()
        return array = arrayVacio;
    }
// Funcion para crear checkbox de participantes mediante un array
    crearCheckbox(array){    
        let contenido=" "    
        array.forEach(persona=>{
            contenido +=`<label for="checkbox${persona.nombre}"></label>${persona.nombre}
                        <input type="checkbox" 
                        class ="quienesDividen" value ="${persona.nombre}">`;
        })
        $("#checkboxEntreQuienes").append(contenido)
    }  
// Funcion para crear opciones de participantes mediante un array 
    crearOpciones(array){
        let contenido =" ";
        array.forEach(persona=>{
            contenido += `<option value="${persona.nombre}">${persona.nombre}</option>`
        })
        $("#quienPago").append(contenido)
    }
// Funcion para mostrar el formulario de gastos, creando opciones de checkbox y select mediante
// los participantes ingresados
    determinarGasto(array){
        $("#quienPago").append(`${this.crearOpciones(array)}` );         
        $("#checkboxEntreQuienes").append(`${this.crearCheckbox(array)}`);
        $("#contenedor4").show();
        $("#btnConfirmarGasto").hide();
        $("#btnCancelarGasto").hide();
    }

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
    
    confirmarGasto(gastos, personas){
        $("#contenedor4").hide()
        this.asignarGasto(gastos[0],personas);
        this.dividirCuenta(gastos[0], personas);
        this.mostrarParticipantes(personas);
        this.cargarContenedor(gastos,"#gastosAnteriores");
        localStorage.clear();
        this.almacenarElementos("Participantes", personas);
        this.almacenarElementos("Gastos", gastos)
    }
}
