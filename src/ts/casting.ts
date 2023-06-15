// ESTILO JS

// // Obtiene el elemento
// const anchor = document.querySelector("a");

// // Muestra la etiqueta HTML
// console.log(anchor);

// // Muestra el link de la etiqueta HTML
// if(anchor){
//     // La propiedad `.href` solo puede ser llamado para elementos anchor 
//     console.log(anchor.href);
// };


// ESTILO TS

// Obtenemos el elemento con aserción no nula (!)
// Aserción no nula => Se utiliza para informar al compilador que se tiene la certeza de que un valor
// no será nulo o indefinido en tiempo de ejecución incluso si el tipo declarado permitiría valores nulos.
const anchor = document.querySelector("a")!;

console.log(anchor.href);

// Casting de tipos / Conversión de tipos => Cambia el tipo de una variable o expresión a otro tipo de datos
const anchor2: HTMLAnchorElement = document.querySelector(".anchor") as HTMLAnchorElement;

console.log(anchor2.href);