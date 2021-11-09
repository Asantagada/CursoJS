export class FuncionesGenerales{
// Funcion para vaciar un array y un contenedor
    eliminarLista(array,contenedor){
        let arrayVacio= array.splice(0, array.length);
        $(`${contenedor}`).empty()
        return array = arrayVacio;
    }
// Funcion para crear varios checkbox de participantes mediante un array
    crearCheckbox(array){    
        let contenido=" "    
        array.forEach(persona=>{
            contenido +=`<label for="checkbox${persona.nombre}">
                        <input type="checkbox" 
                        class ="quienesDividen" value ="${persona.nombre}">
                        ${persona.nombre}
                        </label>`
        })
        return contenido
    }
// Funcion para crear opciones de un select mediante un array 
    crearOpciones(array){
        let contenido =" ";
        array.forEach(persona=>{
            contenido += `<option value="${persona.nombre}">${persona.nombre}</option>`
        })
        $("#quienPago").append(contenido)
    }
}