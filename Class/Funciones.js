
export class Funciones
{

    asignarGasto(personas, nombre, total){
    personas.forEach(element => {
        if(element.nombre == nombre){
            element.saldo -= total;
        };
    });

    return personas;
};
    dividirCuenta( personas, total, quienesDividen){
    let gastoPerCapita= parseFloat(total/(quienesDividen.length + 1));
    
    console.log(gastoPerCapita);
    quienesDividen.forEach(element=> {
        personas.forEach(e=> {
            if (element == e.nombre){
                console.log(e.saldo)
                e.saldo += gastoPerCapita;
                
            }
        })
    })
    return personas;
    
    }

    mostrar(general){
        general.gastos.forEach(gasto => {
            console.log(gasto)
        });
        general.personas.forEach(personas =>{
            console.log(personas)
        })
    }

}