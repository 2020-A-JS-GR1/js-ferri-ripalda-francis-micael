function sumarNumeros(
    numeroInicial: number,
    ...numerosAsumarse: number[]
): number{
    return  numeroInicial
}
sumarNumeros(1,2,3,4,5);
function imprimir(mensaje: string): void{
    console.log("Hola" + mensaje)
}
const arregloNumeros: number[] = [1, 2, 3];
const arregloNumerosDos: Array<number> = [1,2,3];
const arregloNumerosTres: Array<number | string | boolean> = [1, "a", true];
let arregloNumerosCuatro: number[] | string[] = ["1", "2"];
arregloNumerosCuatro = [1, 2, 3];


