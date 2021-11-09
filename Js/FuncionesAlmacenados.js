export class FuncionesAlmacenados{
// Funcion para obtener los almacenados comprobando si es un array lo recorre 
    obtenerAlmacenados(clave){
        const almacenados = JSON.parse(localStorage.getItem(clave));
        const elementos =[];
        if (almacenados != undefined){
            for (const almacenado of almacenados){
            elementos.push(almacenado)
            }     
        }return elementos;
    }
// Funcion para guardar en el storage
    almacenarElementos(clave, valor){
        const aAlmacenar= JSON.stringify(valor)
        localStorage.setItem(clave, aAlmacenar)
    }
}