// let tipoDeGasto;
// let idGasto;
// let tipo;
// let total;
// let quienPago;
// let quienesDividen;




export class Gasto {
    constructor (idGasto,tipo, total, quienPago, quienesDividen){
        this.idGasto=idGasto;
        this.tipo=tipo;
        this.total=parseFloat(total);
        this.quienPago=quienPago;
        this.quienesDividen=quienesDividen;
    }
}