
// -----Desafio 4------------
// Calcular costo total de productos y/o servicios seleccionados por el usuario.
// Calcular pagos en cuotas sobre un monto determinado.
// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.

let montoIngresado=parseFloat(prompt("Cuanto gastaste?"));
const porcentajeIva = (x) => x * 0.21;
const precioFinal = (y , z)=> y + z;
const financiacion = (a , b) => a / b;
const calculoCuotas =(c , d) => c / d
while (true){
    if( !isNaN(montoIngresado)){
        break;
    }else{
        alert("Podrias escribir el numero de vuelta?");
        montoIngresado=parseFloat(prompt("Cuanto gastaste?")); 
    }
}
let respuesta= prompt("Desea pagar en cuotas? \nEscriba SI para aceptar o NO para negar");
function mostrarPrecioFinal(mensaje){
    return precioFinal(mensaje, porcentajeIva(mensaje));  
}

while(true){
    if (respuesta=="SI"){
        let cantidadCuotas= parseInt(prompt("Podes elegir entre 3, 6 y 12 cuotas \nEn cuantas cuotas lo vas a pagar?"));
        console.log("Te quedarian " + cantidadCuotas+ " cuotas de: " + calculoCuotas(mostrarPrecioFinal(montoIngresado), cantidadCuotas) + "$")
        break;
    }else if (respuesta=="NO"){
        console.log("El monto final es de: "+ mostrarPrecioFinal(montoIngresado) + "$" );
        break;
    }else{
        respuesta=prompt("No se entendio la respuesta, recorda usar mayusculas \nEscriba SI para aceptar o NO para negar")
    }
}
// --------------------------------

// Calcular tiempo de espera promedio en relación a la cantidad de turnos registrados.

let turno1= parseFloat(prompt("Cuanto dura el primer turno?"));
let turno2=parseFloat(prompt("Cuanto dura el segundo turno?"));
let turno3=parseFloat(prompt("Cuanto dura el tercer turno?"));
let turno4=parseFloat(prompt("Cuanto dura el cuarto turno?"));
const calcularTurnos= (a,b,c,d)=> (a+b+c+d)/4;
console.log( "El tiempo de espera promedio es de: "+ parseFloat(calcularTurnos(turno1,turno2,turno3,turno4)) + " Horas")

// ----------------------

// Calcular edad promedio de personas registradas.

let persona1=parseFloat(prompt("Escriba su edad por favor"));
let persona2=parseFloat(prompt("Escriba su edad por favor"));
let persona3=parseFloat(prompt("Escriba su edad por favor"));
let persona4=parseFloat(prompt("Escriba su edad por favor"));
const calcularEdad= (a,b,c,d)=> (a+b+c+d)/4;
console.log( "El promedio de edad es de "+ parseFloat(calcularEdad(persona1,persona2,persona3,persona4)) + " Anios");

// --------------------

// Calcular nota final de alumnos ingresados.

let nota1=parseFloat(prompt("Ingrese la primer nota"));
let nota2=parseFloat(prompt("Ingrese la segunda nota"));
let nota3=parseFloat(prompt("Ingrese la tercer nota"));
let nota4=parseFloat(prompt("Ingrese la cuarta nota"));
const calcularNota= (a,b,c,d)=> (a+b+c+d)/4;
let resultado = calcularNota(nota1,nota2,nota3,nota4)
switch(true){
    case (resultado <6): 
    alert("El promedio de notas es: " + resultado+ "\n Lamentablemente debes recursar");
    break;
    case (resultado >=6): 
    alert("El promedio de notas es: " + resultado+ "\nFelicitaciones vas a final")
    break;
    default: alert("Repitamos el proceso");
    nota1=parseFloat(prompt("Ingrese la primer nota"));
    nota2=parseFloat(prompt("Ingrese la segunda nota"));
    nota3=parseFloat(prompt("Ingrese la tercer nota"));
    nota4=parseFloat(prompt("Ingrese la cuarta nota"));
}




