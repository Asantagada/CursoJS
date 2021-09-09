

// ------------------------Entrega 3-----------------


// for (let i=1; i<=3;i++){
//     let nIngresado=parseInt(prompt("Ingrese un numero"));
//     let nSiguiente= nIngresado+1;
//     console.log( "El siguiente es: " + nSiguiente )
// };


let nombre=prompt("Ingrese su nombre");
let turno=1;
    while(nombre!="Esc" && nombre !="esc" && nombre!=" "){
        alert("Hola "+nombre+ "\nTe asignamos el turno numero: "+ turno++);
        nombre=prompt("Ingrese su nombre");
    }

// let nIngresado =parseInt(prompt("Ingrese un numero"));

// for(let inicio = 1;inicio<=nIngresado;inicio++){
//     const palabra= "Hola";
//     console.log(palabra)
// }