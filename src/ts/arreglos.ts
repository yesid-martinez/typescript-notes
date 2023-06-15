console.log("%cArreglos", "color: blue; font-size: 1rem;");

//Arreglo con tipo de datos implicitos
let heroes = ["Spiderman", "Batman", "Deadpool"];
console.log(heroes);


// heroes.push(100); 
// heroes[1] = 10;
// Generan error por tipo de dato

let notas = ["Laura", 4.5, "Juan", 3.5];
// console.log(notas);

notas.push("Yesid");
notas.push(5.0);
// notas.push(true); //Genera error por tipo de dato

console.log(notas);


//Arreglos con tipo explícito
let variable: string[]; //Sin inicializar

let games: string[] = []; //Inicializada

games.push("Gears of War");
games.push("GTA V");
// games.push(1999); // Genera error por tipo de dato

console.log(games);


//Arreglo con tipo unión
let movie: (string|number) [] = [];

movie.push("Avengers");
movie.push(1999);

// movie.push(false);//Genera error por tipo de dato

console.log(movie);


// Arreglo con tipo alias
type strNmbrNull = string | number | null;

let movie2: strNmbrNull[] = [];

movie2.push("The purge");
movie2.push(2015);

// movie2.push(false); //Genera error por tipo de dato

console.log(movie2);

