const verificarStock =(cantidad, stockDisponible) =>{
    if(cantidad >= stockDisponible){
        return false;
    }else return true;


const agregarCarrito = (opcionCarrito, cantidadDeseada)=>{
    const buscarProducto = arrayProductos.find(producto =>producto.id === opcionCarrito);
    if (verificarStock(cantidadDeseada, buscarProducto.stockProducto)== false){
        alert("Lo siento no contamos con esa cantidad");
    }else carrito.push(buscarProducto)
}


const mostrarProductos= ()=>{
   let menuProductos ="Ingresa con el numero de referencia el producto que quieras agregar al carrito \n"
   arrayProductos.forEach(producto => {
      menuProductos += arrayProductos.productId + ".-" + arrayProductos.nombreProducto + "\n"
   })
   menuProductos += (arrayProductos.length + 1) + ".-Salir";
   let eleccionProducto = parseInt(prompt(menuProductos));
    return eleccionProducto 
}

const calcularTotal= ()=>{
    let total= 0;
    const buscarPrecios= carrito.forEach(e=> e.precioProducto);
    total += buscarPrecios;
    console.log("El total es: $" + total);
}