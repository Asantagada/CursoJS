let arrayProductos = [];
let productId= 1;
let opcion;
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