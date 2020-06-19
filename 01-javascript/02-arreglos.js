const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//arreglo =1;

let cualquierCosa = "ASD";
cualquierCosa = 1;
cualquierCosa = true;
cualquierCosa = undefined;
cualquierCosa = [];
cualquierCosa = {};
console.log(cualquierCosa)

const arregloTodo = [true, 1, 1.2, "Francis", undefined, null, {}, [1, 2, true, "A"]];

// for of
for (let numero of arreglo){ // valores
    console.log("numero", numero);
}
// for in

for (let indice in arreglo){ // indices
    console.log("numero", indice);
}

arreglo.push(11); //Añadir al final un elemento
console.log(arreglo);

arreglo.pop(); // eliminar al final del arreglo
console.log(arreglo);

arreglo.unshift(5); // añdir al principio del arreglo
console.log(arreglo);

arreglo.splice(0,1);
console.log(arreglo);

arreglo.splice(0,0, 3,4,5);

console.log(arreglo);
const indice = arreglo.indexOf(9);
console.log(indice);
arreglo.splice(indice,1);
console.log(arreglo);
