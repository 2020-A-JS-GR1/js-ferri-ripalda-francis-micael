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

if (null){
    console.log("Es Verdadero"); //!
} else {
    console.log("Es Falso");
}

if (undefined){
    console.log("Es Verdadero"); //!
} else {
    console.log("Es Falso");
}

// Orden de importancia
// 1) "const"
// 2) "let"
// 3)  Nunca usar "var"

// Objeto Js (JSON) - ARreglos
const francis = {
    nombre: "Francis", // llave valor
    "apellido": 'Ferri', // Se puede pero no es una buena practica
    edad: 31,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'plomo',
        talla: "40"
    }
    mascotas: ["cachetes", "Pequitas", "Panda"]
}; // object
console.log(francis.nombre);
console.log(francis.apellido);

const arregloNumeros = []; // object

console.log(francis);
console.log(arregloNumeros);