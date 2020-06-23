// 04-funcioes.js
function soloNumeros(a,b,c) { // valor a devolver
    return a - b + c;
}
function soloLetras(a,b,c){ // Undefined
    console.log(a,b,c);
}


// soloNumeros('v', true, [1,2,3])
soloNumeros('v', true, [1,2,3]);
soloNumeros();
soloNumeros(1, 2, 3, 4, 5, 6, 78, 9);


// Funciones nombradas
function funcionNombrada(){}
funcionNombrada();
const funcionNombradaDos= function () {};
var funcionNombradaTres = function () {}
let funcionNomrbradaCUatro = function opcional() {}
funcionNombradaDos();
funcionNombradaTres();
funcionNomrbradaCUatro();

// Opcional() NO EXISTO


// FAT ARROW FUNCTIONS
const funcionNombradaCinco = () => {};
const funcionNombradaSeis = (x) => {
    return x + 1;
};

const funcionNombradaSiete = x =>  x + 1; // Se puede omitir return y llaves si es una sola linea
// se puede omitir los parentesis si es solo un solo parametro


// parametros infnitos
function  sumarNUmeros(numeroIncial,
                       ...otrosNumeros) {
    return numeroIncial + otrosNumeros.reduce((a,v) => a+v, 0);
}
sumarNUmeros(1,2,3,4,5,6,7,8,9,10);

