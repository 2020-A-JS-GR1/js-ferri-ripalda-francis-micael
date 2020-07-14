// 01-variables.ts
let nombre: string = "Adrian";
//nombre = 1; //error
nombre = "Vicente";
// Duck Typing
let edad: number = 31;
let casado: boolean = false;
let fecha: Date = new Date();
//let fecha = new Date();
let sueldo: number;
sueldo = 12.4;
// sueldo = "12.23"; //error
let marihuana: any = 2; // MUY MALA PRACTICA HACER ESTO SOLO USA CUANDO SEA UTIL
marihuana = "2";
marihuana = true;
marihuana = () => "2";

let edadMultiple: number | string = 2;
edadMultiple = "2";
edadMultiple = 2222;
edadMultiple = "dos";
