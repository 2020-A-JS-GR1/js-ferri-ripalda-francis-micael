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
    },
    mascotas: ["cachetes", "Pequitas", "Panda"]
}; // object
console.log(francis.nombre); // Francis
console.log(francis.apellido); // Ferri
francis["nombre"]; // Francis
console.log(francis["nombre"]);
francis.nombre = "Micael";

console.log(francis["nombre"]);
francis["nombre"] = "Gato";

const arregloNumeros = []; // object
console.log(francis["nombre"]);

/*
console.log(francis);
console.log(arregloNumeros);
*/

francis.sueldo;
console.log(francis.sueldo);

francis.sueldo = 1.2;
console.log(francis.sueldo);

francis["gastos"] = 0.8;
console.log(francis.gastos);

console.log(Object.keys(francis));


francis.sueldo = undefined;
console.log(francis);

console.log(Object.values(francis));


delete francis.sueldo; // Elimina la llave nombre
console.log(francis);

console.log(Object.keys(francis));
console.log(Object.values(francis));


// Lista de variables por valor
// number
// string
//  boolean
// undefined

let edadFrancis = 31;
let edadMicael = edadFrancis;
console.log(edadFrancis);
console.log(edadMicael);
edadFrancis = edadFrancis + 1;

console.log(edadFrancis);
console.log(edadMicael);

// Lista de variables por referencia

/*
let rafael = {
    nombre: "Rafael"
}

let lenin = rafael;
console.log(rafael);
console.log(lenin);

lenin.nombre = "Lenin";

console.log(rafael);
console.log(lenin);

delete rafael.nombre;

console.log(rafael);
console.log(lenin);

 */

let rafael = {
    nombre: "Rafael"
}

let lenin = Object.assign({}, rafael);

console.log(rafael);
console.log(lenin);

lenin.nombre ="Lenin";
delete rafael.nombre;

console.log(rafael);
console.log(lenin);