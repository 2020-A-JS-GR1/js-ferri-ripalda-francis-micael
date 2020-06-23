const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];

// FUNCIONES COMO PARAMETROS

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
            const nuevoElemento = {
                id: valorActual.id,
                nombre:valorActual.nombre,
                nota: valorActual.nota +1
            };
            return nuevoElemento;
        }
    );

console.log("RespuestaMap",respuestaMap);
console.log("arreglo", arreglo);


// Devolver un nuevo elemento
const respuestaMapNuevo = arreglo
    .map(
        // Funcion anonima no tiene nombre
        (valorActual,indiceActual,arregloCompleto) =>{
            return valorActual.nota;
        }
    );
console.log("RespuestaMap",respuestaMapNuevo);
console.log("arreglo", arreglo);

// FILTER
// Devolver una expresion TRUTY FALSY

const respuestaFilter = arreglo
    .filter(
        (valorActual) => {
            return valorActual.nota >= 14;
        }
    )

console.log("respuestaFilter",respuestaFilter);
console.log("arreglo", arreglo);


// Hay alguna nta menor a 9
// OR
const respuestaSome = arreglo.some(
    (valorActual,indiceActual,arregloCompleto) => {
        return valorActual.nota < 4
    }
);
console.log("respuestaSome", respuestaSome);


// AND
//Todas las notas son mayores a 14

const respuestaEvery = arreglo.every(
    (valorActual,indiceActual,arregloCompleto) =>{
    return valorActual.nota > 14
});

console.log("respuestaSome", respuestaEvery);

// Reduce de izquierda a derecha
// Reduce right de derecha a izquierda

const respuestaReduce = arreglo.reduce(
    (valorAcumulado, valorActual, indice, arreglo) => {
        return valorAcumulado - valorActual.nota;
    },
    500 // Acumulador
);

console.log("Respuestareduce", respuestaReduce);

const arregloEstudiantesMenoresANueve = arreglo
    .map((v) => v.nota *1.3)
    .filter((nota)=> nota > 9);
const totalPuntosEstudiantes = arregloEstudiantesMenoresANueve
    .reduce((acumulado, actual) => acumulado + actual, 0);
const notaPromedio = totalPuntosEstudiantes / arregloEstudiantesMenoresANueve.length;
console.log("notaPromedio", notaPromedio);