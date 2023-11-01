/*
    Ejercicio Seis
    Rogelio Lopez R.
    26 de octubre de 2023
    Generation MX
*/

// Información Inicial
let arr = [3,6,12,5,100,1];
console.log(`El arreglo original es: [${arr}]`);

// Algoritmo
let x = 0;
let y = 0;
let cont = 0;

do {

    cont = 0;
    for (let i=0; i<arr.length - 1; i++) {
        x = arr[i];
        y = arr[i+1];
        if (x > y) {
            arr.splice(i, 2, y, x);
            cont += 1;
        } else {
            continue;
        }
    }
    
} while (cont != 0);

// Imprime el resultado
console.log(`El arreglo ordenado es: [${arr}]`)
