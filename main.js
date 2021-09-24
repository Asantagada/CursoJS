let arrayProductos = [];
let productId= 1;
let opcion;
let carrito= []
let opcionCarrito;

const mostrarProductos= ()=>{
   let menuProductos ="Ingresa con el numero de referencia el producto que quieras agregar al carrito \n"
   arrayProductos.forEach(producto => {
      menuProductos += arrayProductos.productId + ".-" + arrayProductos.nombreProducto + "\n"
   })
   menuProductos += (arrayProductos.length + 1) + ".-Salir";
   let eleccionProducto = parseInt(prompt(menuProductos));
    return eleccionProducto 
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

console.log(arrayProductos)



alert("Bueno ahora vamos a realizar compras sobre los productos que acabas de ingresar xD");
do{
    let opcionCarrito = mostrarProductos();
    let cantidadDeseada =parseInt(prompt("Que cantidad Deseas?"));
    agregarCarrito (opcionCarrito , cantidadDeseada);
    calcularTotal();
    opcion= prompt("Desea Ingresar otro Producto \n Escriba SI para agregarlo")
}while (opcion== "SI" || opcion == "si" || opcion =="S")