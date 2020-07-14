function sumarNumeros(numeroInicial) {
    var numerosAsumarse = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosAsumarse[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
sumarNumeros(1, 2, 3, 4, 5);
function imprimir(mensaje) {
    console.log("Hola" + mensaje);
}
var arregloNumeros = [1, 2, 3];
var arregloNumerosDos = [1, 2, 3];
var arregloNumerosTres = [1, "a", true];
var arregloNumerosCuatro = ["1", "2"];
arregloNumerosCuatro = [1, 2, 3];
