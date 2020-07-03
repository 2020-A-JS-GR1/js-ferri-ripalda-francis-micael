const fs = require("fs");

function leerArchivo(path) {
    const promesLectura = new Promise((resolve, reject) => {
        contenidoArchivo =  fs.readFile(path, "utf-8", (error, contenido) => {
            if (error) {
                reject("No se pudo leer el archivo");
            } else {
                resolve(contenido);
            }
        })
    });
    return promesLectura;
}

function escribirArchivo(contenidoNuevo, path){
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

function leerEscribirArchivo(path, contenidoNuevo){
    leerArchivo(path)
        .then(
            (contenido) => {
                console.log(contenido);
                // Se le agrega el contenido nuevo al anterior
                contenidoNuevo = contenido + "\n" + contenidoNuevo;
                return escribirArchivo(contenidoNuevo, path);
            }
        )
        .then(
            () => {
                console.log("Sobreescribiendo ...");
                return leerArchivo(path);
            }
        )
        .then(
            (contenido) => {console.log(contenido)}
        )
        .catch(
            (error) => {
                console.log("Tuvieste un error wey",error);
            }
        )
}


leerEscribirArchivo("./06-ejemplo.txt", "Ardilla");