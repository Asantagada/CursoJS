const verificarStock =(cantidad, stockDisponible) =>{
    if(cantidad >= stockDisponible){
        return false;
    }else return true;
}

const agregarCarrito = (opcionCarrito, cantidadDeseada)=>{
    const buscarProducto = arrayProductos.find(producto =>producto.productId === opcionCarrito);
    if (verificarStock(cantidadDeseada, buscarProducto.stockProducto)== false){
        alert("Lo siento no contamos con esa cantidad");
    }else carrito.push(buscarProducto)
}


const mostrarProductos= ()=>{
    let menuProductos ="Ingresa con el numero de referencia el producto que quieras agregar al carrito \n"
    arrayProductos.forEach(producto => {
        menuProductos += producto.productId + ".-" + producto.nombreProducto + "\n"
    })
    menuProductos += (arrayProductos.length + 1) + ".-Salir";
    let eleccionProducto = parseInt(prompt(menuProductos));
    return eleccionProducto 
}

const calcularTotal= ()=>{
    let total= 0;
    carrito.forEach(e=>total += e.precioProducto);
    console.log("El total es: $" + total);
}