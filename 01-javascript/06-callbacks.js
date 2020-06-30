const fs = require("fs");

console.log("Primero");
fs.readFile( //ASINCRONO
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => { // CALLBACK
        console.log("Segundo");
        if(error){
            console.log("Hubo un error ", error);
        } else {
            console.log(contenido);
        }
    }
);

console.log("Final"); // SINCRONA


const suma = 5 + 3; // SINCRONA
console.log("suma", suma); // SINCRONA