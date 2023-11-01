/*
    Ejercicio Cuatro
    Rogelio Lopez R.
    26 de octubre de 2023
    Generation MX
*/

// Informacion Inicial
const student1Courses = ["Math","English","Programming"];
const student2Courses = ["Geography","Spanish","Programming"];

// A ferza bruta
let cont = 0;
let sameCourses = [];

for (let i=0; i<student1Courses.length; i++) {
    for (let j=0; j<student2Courses.length; j++) {
        if (student1Courses[i] == student2Courses[j]) {
            sameCourses[cont] = student2Courses[j];
            cont += 1;
        } else {
            continue;
        }
    }
}

// Metodos FILTER e INCLUDES
const new_arr = student1Courses.filter((x) => student2Courses.includes(x));

// Imprimir Resultados
if (cont == 0) {
    console.log("No hay cursos en comun!");
} else {
    console.log(`Los cursos en comun son: [${sameCourses}]`);
}

if (new_arr.length == 0) {
    console.log("No hay cursos en comun!");
} else {
    console.log(`Los cursos en comun son: [${new_arr}]`);
}
