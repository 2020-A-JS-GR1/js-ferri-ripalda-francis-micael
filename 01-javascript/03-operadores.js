const arreglo = [
    {
        id:1,
        nombre: 'Francis',
        nota: 5
    },
    {
        id:2,
        nombre: 'Paco',
        nota: 7
    },
    {
        id:3,
        nombre: 'Alberto',
        nota: 10
    },
    {
        id:4,
        nombre: 'Benjamin',
        nota: 3
    },
    {
        id:5,
        nombre: 'Erick',
        nota: 8
    },
    {
        id:6,
        nombre: 'Goku',
        nota: 14
    },
    {
        id:7,
        nombre: 'Madona',
        nota: 12
    },
    {
        id:8,
        nombre: 'Bethoven',
        nota: 15
    },
    {
        id:9,
        nombre: 'Pepe',
        nota: 7
    },
    {
        id:10,
        nombre: 'Ernesto',
        nota: 8
    }
];

// FUNCIONES COMO PARAMETROS

// FIND

const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log("valorActual",valorActual);
            console.log("indiceActual",indiceActual);
            console.log("arregloActual",arregloCompleto);
            return valorActual.nombre === "Alberto";
        }
    );

console.log("respuestaFInd", respuestaFind);

const respuestaFindIndex = arreglo
    .findIndex(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log("valorActual",valorActual);
            console.log("indiceActual",indiceActual);
            console.log("arregloActual",arregloCompleto);
            return valorActual.nombre === "Alberto";
        }
    );

console.log("respuestaFindIndex", respuestaFindIndex);

// MAP
// Devolver un nuevo elemento
const respuestaMap = arreglo
    .map(
        function (valorActual,indiceActual,arregloCompleto) {
            valorActual.nota = valorActual.nota + 1;
            return valorActual;
        }
    );

console.log("RespuestaMap",respuestaMap);
console.log("arreglo", arreglo);


// Devolver un nuevo elemento
const respuestaMapNuevo = arreglo
    .map(
        function (valorActual,indiceActual,arregloCompleto) {
            return valorActual.nota;
        }
    );
console.log("RespuestaMap",respuestaMapNuevo);
console.log("arreglo", arreglo);



/*

const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto) {
            console.log("valorActual",valorActual);
            console.log("indiceActual",indiceActual);
            console.log("arregloActual",arregloCompleto);
            return valorActual.nombre === "Alberto";
        }
    );

console.log("respuestaForEach", respuestaForEach); // undefined

 */