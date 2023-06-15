// Importar archivo `.js` y no `.ts` => Asegura que el código JavaScript esté presente
// y listo para su ejecución en el entorno adecuado.

import { Training } from "./model/training.js";

const firstTraining = new Training("Swimming", 72, "2023-05-13");
console.log(firstTraining); 


// Prueba de modificadores de acceso

// public property
firstTraining.type = "Running"
console.log(firstTraining.type); 

// readonly property
// firstTraining.distance = 99 // Error: read-only property
console.log(firstTraining.distance);

// private property
// console.log(firstTraining.comments); // Error: private property





