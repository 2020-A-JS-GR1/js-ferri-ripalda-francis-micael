const fs = require("fs");
/*
Hacer una funcion que me acapte como parametro una variable con el path del archivo y el contenido a a gregar.
La funcion debe tomar estos dos parametros y leer el archivo y añadir el texto al finalk del archivo
*/

function escribirArchivo(path, contenidoNuevo) {
    //fs.readfile(path, codificacion, callback
    //fs.weiteFile(path, contenido, codificacion, callback)

    contenidoArchivo =  fs.readFile(path, "utf-8", (error, contenido) => {
        if (error) {
            console.log("Hubo un error");
        } else {
            contenido += contenidoNuevo;
            fs.writeFile(path, contenido, "utf-8", (error, contenido) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log("logrado")
                }
            })
        }
    })
}

escribirArchivo("./06-ejemplo.txt", "Perro");
