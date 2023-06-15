console.log("%cObjetos JSON", "color: red; font-size: 1rem");

let movie1 = {
    title: "Django Unchained",
    year: 2012,
};

// console.log(movie1);

movie1.title = "Pulp Fiction";
movie1.year = 1990;
//movie1.year = "String"; // Genera error de tipos
  
console.log(movie1);


// Definición de caracteristicas del objeto con tipos de propiedades
let movies: {
  title: string;
  year: number;
};

// console.log(movies); // Genera error, variables no asignadas

// Creación del objeto
movies = {
  title: "ABC",
  year: 123,
};
console.log(movies);

movies.title = "xyz";
movies.year = 456;

console.log(movies);


// movies = {
//   title: "DEF"
// };
// Genera un error de estructura si le falta algún atributo.

// movie2 = {
//   title: "DEF",
//   year: 2020,
//   genre: "comedy"
// };
// Genera un error de estructura si hay algún atributo extra.

// movie2.genre = "comedy" // Genera error de estructura