// Variables Mutables e inmutables

// Variables Muutables
var numeroUno = 1;
let numeroDos= 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
// Variables Inmuutables
const configuracionArchivos = "PDF";
// configuracionArchivos = "XML";

// Tipos de variables
const numero = 1; // number
const sueldo = 1.2; // number
const texto = "Francis"; // string
const booleano = false; // boolean
const nulos = null; // object
const zapatos = undefined; /// undefined
const apellido = 'Ferri';
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof nulos);
console.log(typeof zapatos);
console.log(typeof apellido);
console.log(typeof Number("asd"));
console.log(Number("asd"));

if (true == true){
    console.log("Es Verdadero"); //!
} else {
    console.log("Es Falso");
}

if (true == false){
    console.log("Es Verdadero");
} else {
    console.log("Es Falso");//!
}

if (""){
    console.log("Es Verdadero");
} else {
    console.log("Es Falso"); //!
}

if ("Francis"){
    console.log("Es Verdadero");//!
} else {
    console.log("Es Falso");
}

if (-1){
    console.log("Es Verdadero"); //!
} else {
    console.log("Es Falso");
}

if (0){
    console.log("Es Verdadero");
} else {
    console.log("Es Falso"); //!
}

if (1){
    console.log("Es Verdadero"); //!
} else {
    console.log("Es Falso");
}