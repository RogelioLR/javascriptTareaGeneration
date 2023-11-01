/*
    Ejercicio Dos
    Rogelio Lopez R.
    26 de octubre de 2023
    Generation MX
*/

// Informacion Inicial
const arr = [1,2,4,5];

// A fuerza bruta
function doubleArr( arr ) {
    const res = [];
    for (let i=0; i<arr.length; i++) {
        res[i] = 2*arr[i];
    }
    return res;
}

// Metodo MAP
const new_arr = arr.map((x) => 2*x);

// Imprime los Resultados
console.log(`El arreglo dado es: [${arr}]`);
console.log(`\nEl resultado de la funcion es: [${doubleArr(arr)}]`);
console.log(`\nEl resultado con MAP es: [${new_arr}]`);
