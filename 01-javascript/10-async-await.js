const fs = require("fs");

//const promesaLeerArchivo = new Promise();
//const promesaEscribirArchivo = new Promise();

// ASYNC AWAIT _> DENTRO DE UNA FUNCION

const promesaLecturaEJemplo = () => {

};

const promesaEscribirEjemplo=() => {
    return new Promise(
        (res, rej) => {
            //res("CONTENIDO ESCRIBIR ARCHIVO")
            rej('ERROR =')
        }
    )
};


function promesaLeerArchivo(path) {
    const promesaLectura = new Promise((resolve, reject) => {
        contenidoArchivo =  fs.readFile(path, "utf-8", (error, contenido) => {
            if (error) {
                reject("No se pudo leer el archivo");
            } else {
                resolve(contenido);
            }
        })
    });
    return promesaLectura;
}

function promesaEscribirArchivo(contenidoNuevo, path){
    const promesaEscribir = new Promise((resolve, reject) =>{
        fs.writeFile(path, contenidoNuevo, "utf-8", (error) => {
            if (error) {
                reject("No se pudo escribir en el archivo");
            } else {
                resolve();
            }
        })
    });
    return promesaEscribir;
}

async function ejercicio(path, contenidoNuevo) {
    console.log("1");
    try{
        console.log("2");
        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        console.log("respuestaLecturaArchivo ", respuestaLecturaArchivo);
        console.log("3");
        contenidoNuevo = respuestaLecturaArchivo + "\n" + contenidoNuevo;
        await  promesaEscribirArchivo(contenidoNuevo, path);
        console.log("4");
        const nuevoContenido = await promesaLeerArchivo(path);
        console.log("nuevoContenido ", nuevoContenido);
        console.log("5")
    } catch(error){
        console.log("error", error)
    }
}
console.log("6");
console.log("7");
const f = async () => {
    // contenido
}

const respuestaEjercicio = ejercicio("./06-ejemplo.txt", "NUEVO CONTENIDO");
console.log( "respuestaEjercicio", respuestaEjercicio)
console.log("promesaLeerArchivo", promesaLeerArchivo("./06-ejemplo.txt"));
console.log("promesaEscribirArchivo",promesaEscribirArchivo("Batman", "./06-ejemplo.txt"))
console.log(promesaEscribirEjemplo())