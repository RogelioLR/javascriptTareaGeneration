/*
    Ejercicio Cinco
    Rogelio Lopez R.
    26 de octubre de 2023
    Generation MX
*/

// Información Inicial
let people = ["Maria","Dani","Luis","Juan","Camila"];

// Imprime la lista completa
console.log("1. La lista de personas inicial es:");
console.log(`[${people}]`);

// Eliminar a "Dani" del arreglo
deletedFirst = people.splice(1, 1);
console.log(`\n2. Se ha eliminado el elemento: "${deletedFirst}, la nueva lista es:`);
console.log(`[${people}]`);

// Eliminar a "Juan" del arreglo
deletedSecond = people.splice(2, 1);
console.log(`\n3. Se ha eliminado el elemento: "${deletedSecond}, la nueva lista es:`);
console.log(`[${people}]`);

// Mover a "Luis" al inicio
people.splice(0, 2, "Luis", "Maria");
console.log(`\n4. Se ha cambiado la posicion de "Luis" al inicio, la nueva lista es: `);
console.log(`[${people}]`); 

// Agrega tu nombre
people.push("Rogelio");
console.log(`\n5. Se ha agregado el elemento "Rogelio", la nueva lista es: `);
console.log(`[${people}]`);

// Imprime cada elemento
console.log("\n6. Imprime cada elemento:");
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
    if (people[i] == "Maria") {
        break;
    } else {
        continue;
    }
}

// Indice de Maria
indexMaria = people.indexOf("Maria");
console.log(`\n7. El elemento "Maria" se encuentra en la posicion: ${indexMaria}`);
