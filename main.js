let arrayProductos = [];
let productId= 1;
let opcion;
let carrito= []
let opcionCarrito;
let ordenxPrecio = [];



const verificarStock =(cantidadDeseada, stockDisponible) =>{
    if(cantidadDeseada >= stockDisponible){
        return false;
    }else return true;
}

const agregarCarrito = (opcionCarrito, cantidadDeseada)=>{
    const buscarProducto = ordenxPrecio.find(producto =>producto.id === opcionCarrito);
    console.log(buscarProducto)
    if (verificarStock(cantidadDeseada , buscarProducto.stock)=== false){
        alert("Lo siento no contamos con esa cantidad");
    }else carrito.push(buscarProducto)
}


const mostrarProductos= ()=>{
    let menuProductos ="Ingresa con el numero de referencia el producto que quieras agregar al carrito \n"
    ordenxPrecio.forEach(producto => {
        menuProductos += producto.id + ".-" + producto.nombre + "\n"
    })
    menuProductos += (ordenxPrecio.length + 1) + ".-Salir";
    let eleccionProducto = parseInt(prompt(menuProductos));
    return eleccionProducto 
}

const calcularTotal= ()=>{
    let total= 0;
    carrito.forEach((e)=>(total += e.precio));
    console.log("El total es: $" + total);
}

do {

    let nombreProducto = prompt("Escriba el nombre del producto");
    let precioProducto= parseFloat(prompt("Ingrese el precio del producto"));
    let stockProducto = parseInt(prompt("Que cantidad tenes para vender?"));
    let descripcionProducto= prompt("Agrega una breve descripcion del porducto");
    arrayProductos.push (new Producto(productId, nombreProducto,precioProducto,stockProducto,descripcionProducto));
    productId ++;
    opcion= prompt("Desea Ingresar otro Producto \n Escriba SI para agregarlo")
}while(opcion== "SI" || opcion == "si" || opcion =="S");

ordenxPrecio = arrayProductos.map (x => x );
ordenxPrecio.sort(function (a, b){
    return a.precio -b.precio
})
console.log(ordenxPrecio)



alert("Bueno ahora vamos a realizar compras sobre los productos que acabas de ingresar xD");
do{
    let opcionCarrito = mostrarProductos();
    let cantidadDeseada =parseInt(prompt("Que cantidad Deseas?"));
    agregarCarrito (opcionCarrito , cantidadDeseada);
    calcularTotal();
    opcion= prompt("Desea Ingresar otro Producto \n Escriba SI para agregarlo");
}while (opcion== "SI" || opcion == "si" || opcion =="S");
