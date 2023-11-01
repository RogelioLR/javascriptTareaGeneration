/*
    Ejercicio Tres
    Rogelio Lopez R.
    26 de octubre de 2023
    Generation MX
*/

// Informacion Inicial
const arr = [1,2,3,4];

// A fuerza bruta
function operateArr( arr ) {
    let res = [0,1];
    for (let i=0; i<arr.length; i++) {
        res[0] += arr[i];
        res[1] *= arr[i];
    }
    return res;
}

const res = operateArr(arr);

// Metodo Reduce
const S = arr.reduce((vp, va) => vp+va, 0);
const P = arr.reduce((vp, va) => vp*va, 1);

// Imprime los resultados
console.log(`El arreglo ingresado es: [${arr}]`);
console.log(`\nLa suma de sus elementos es: ${res[0]} `);
console.log(`\nEl producto de sus elementos es: ${res[1]}`);
console.log(`La suma con el metodo REDUCE es: ${S}`);
console.log(`El producto con el metodo REDUCE es: ${P}`);
