const fs = require("fs");

function promesaLeerArchivo(path) {
    const promesaLectura = new Promise((resolve, reject) => {
        // contenidoArchivo =
        fs.readFile(path, "utf-8", (error, contenido) => {
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
    try{
        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        console.log("\nRespuesta Lectura-Archivo: \n", respuestaLecturaArchivo);
        contenidoNuevo = respuestaLecturaArchivo + "\n" + contenidoNuevo;
        await  promesaEscribirArchivo(contenidoNuevo, path);
        const nuevoContenido = await promesaLeerArchivo(path);
        console.log("\nNuevo Contenido: \n", nuevoContenido);
    } catch(error){
        console.log("error", error)
    }
}

respuestaEjercicio = ejercicio("./02-ejemplo.txt", "CONTENIDO NUEVO 2");
