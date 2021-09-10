

// -------------Desafio 4 (Complementario)------

// let precioIngresado=prompt("Ingrese el costo del producto");
// const costoIva = (x) => x * 0.21;
// const precioFinal = (y , z) => parseFloat(y) + parseFloat(z);
// function mostrar(precio){
//     return precioFinal(costoIva(precio), precio)
// }

// console.log("El precio final del producto es: " + mostrar(precioIngresado))


// Comprobar si numero 1 es multiplo de numero 2

let numero1 =prompt("Ingrese el primer numero");
let numero2 = prompt("Ingrese el segundo numero");
const multiplo = (a , b) => a % b;
function darRespuesta (x, y){
    if( multiplo(x , y) != 0){
        return x + " No es multiplo de "+ y;
    }
    else{
        return x + " Es multiplo de " + y;
    }
}
console.log(darRespuesta(numero1, numero2))