// let peso= prompt("ingrese su peso en kg");
// let altura= prompt("Ingrese su altura");

// let imCorporal= peso/altura;
// console.log(imCorporal);

// if(imCorporal<=18.5){
//     alert("Su peso es bajo, se recomienda consultar un profesional");
// } else if(imCorporal<=26.9){
//     alert("Se encuentra en buen peso")
// } else if(imCorporal<=25){
//     alert("Usted puede tener sobrepeso, se recomienda consultar un profesional")
// }else{
//     alert("Usted puede estar padeciendo Obesidad, se recomienda consultar un profesional")
// }

let numero=prompt("Escriba un numero");
if(numero >1000){
    alert("El numero debe ser menor de 1000")
}else if( numero => 10 && numero <= 50){
    alert("El numero elegido es " + numero)
}
let texto=prompt("Escribi tu consulta");
if(texto == "Hola"){
    alert("Bienvenid@ en que le podemos ayudar?")
}


