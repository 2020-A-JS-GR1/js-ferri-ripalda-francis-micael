const adrian = {
    nombre: "Adrian"
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};

const adrianCarolina = {
    ...adrian,
    ...carolina
};

adrianCarolina.nombre = "Carolina";
console.log("adrianCarolina",adrianCarolina);
console.log("Adrian",adrian);

const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];

const superArreglo = {
    ...arregloUno,
    ...arregloDos
};

const superArreglo1 = [
    ...arregloUno,
    ...arregloDos
];

superArreglo[0] = 100;
console.log("superArreglo", superArreglo);
console.log("arregloUno", arregloUno);

superArreglo1[0] = 100;
console.log("superArreglo", superArreglo1);
console.log("arregloUno", arregloUno);