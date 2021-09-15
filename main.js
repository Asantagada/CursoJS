class gasto {
    constructor (tipo, cantidad, quienPago, cuantosDividen){
        this.tipo=tipo;
        this.cantidad=cantidad;
        this.quienPago=quienPago;
        this.cuantosDividen=cuantosDividen;
        
    }
    mostar(){
        return `Cada uno le debe ${calculo(this.cantidad, this.cuantosDividen)} a ${this.quienPago}`
    }
}
const calculo = (a, b) =>parseFloat(a/b);
const tipo = prompt("En que gastaste?");
const cantidad= parseFloat(prompt("Cuanto gastaste?"));
const quienPago= prompt("Decime tu nombre");
const cuantosDividen = parseFloat(prompt("Indica con numeros entre cuantos se divide"));

const gasto1 = new gasto (tipo, cantidad, quienPago,cuantosDividen);
alert(gasto1.mostar())
