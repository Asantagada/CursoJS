export class Funciones
{

    asignarGasto(personas, nombre, total){
    personas.forEach(element => {
        if(element.nombre == nombre)
        {
            element.saldo = element.saldo - total;
        };
    });

    return personas;
};
    dividirCuenta( personas, total, quienesDividen){
    let gastoPerCapita= total/quienesDividen.length + 1;
    quienesDividen.forEach(element=> {
        personas.forEach(e=> {
            if (element.nombre== e.nombre){
                e.saldo= e.saldo +gastoPerCapita
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