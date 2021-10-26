// let tipoDeGasto;
// let idGasto;
// let tipo;
// let total;
// let quienPago;
// let quienesDividen;




export class Gasto {
    constructor (idGasto,tipoGasto, totalGasto, quienPago, quienesDividen){
        this.idGasto=idGasto;
        this.tipoGasto=tipoGasto;
        this.totalGasto=parseFloat(totalGasto);
        this.quienPago=quienPago;
        this.quienesDividen=quienesDividen;
    }
}