const fs = require("fs");

//const promesaLeerArchivo = new Promise();
//const promesaEscribirArchivo = new Promise();

// ASYNC AWAIT _> DENTRO DE UNA FUNCION

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
        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        contenidoNuevo = respuestaLecturaArchivo + "\n" + contenidoNuevo;
        await  promesaEscribirArchivo(contenidoNuevo, path);
        const nuevoContenido = await promesaLeerArchivo(path);
        console.log(nuevoContenido);
    } catch(error){
        console.log("error", error)
    }
}

const f = async () => {
    // contenido
}



ejercicio("./06-ejemplo.txt", "Batman");