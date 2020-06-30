const fs = require("fs");

function  promesaEsPar(numero) {
    const  miPrimeraPromesa = new Promise((resolve, reject) => {
        //resolve("Felicidad")
        if(numero % 2 == 0){
            resolve(numero)
        } else {
            reject('No es par')}
    });
    return miPrimeraPromesa
}

function  promesaElevarAlCuadrado(numero) {
    const  miPrimeraPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuuadrado = Math.pow(numero,2);
            resolve( numeroElevadoAlCuuadrado);
        }
    );
    return miPrimeraPromesa
}

promesaEsPar(2)
    .then( // try
        (contenido) => {
            console.log("Contenido then", contenido)
            //Mala practica
            /*
                    function  promesaEsPar(numero) {
                    const  miPrimeraPromesa = new Promise((resolve, reject) => {
                        //resolve("Felicidad")
                        if(numero % 2 == 0){
                            resolve("Es par")
                        } else {
                            reject('No es par')}
                    });
                    return miPrimeraPromesa
                }
             */
        }
    )
    .catch( // catch
        (error) => {
    console.log("Contenido catch", error)
        }
    )


promesaEsPar(2)
    .then( // try
        (numeroPar) => {
            console.log("Contenido then", numeroPar)
            return promesaElevarAlCuadrado(numeroPar)
        }
    )
    .then(
        (numeroParAlCuadrado) => {

            console.log("numeroParAlCuadrado", numeroParAlCuadrado);
        }
    )
    .catch( // catch
        (error) => {
            console.log("Contenido catch", error)
        }
    )