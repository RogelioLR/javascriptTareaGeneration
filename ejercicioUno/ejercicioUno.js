/*
    Ejercicio Uno
    Rogelio Lopez R.
    26 de octubre de 2023
    Generation MX
*/

// Informacion Inicial
const arr = ["This","is","a","sentence."];

// A fuerza bruta
function printOutString( arr ) {
    let res = "";
    for (let i=0; i<arr.length; i++) {
        res += arr[i] + " ";
    }
    return res;
}

// Metodo JOIN
const new_arr = arr.join(" ");

// Imprimimos el Resultado
console.log(`El arreglo dado es: [${arr}]`);
console.log(`\nLa sentencia formada es: "${printOutString(arr)}"`);
console.log(`\nLa sentencia formada por JOIN es: "${new_arr}"`);
