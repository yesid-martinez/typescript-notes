console.log("%c Funciones", "color: purple; font-size: 1rem;");

// Función JS Style
const functPrint = () =>{
    // console.log("¡Todo correcto!");
};
functPrint();


// Void function => No retorna ningún valor
let funcion = (): void =>{
    // console.log("Void function");

    // return "Dato erróneo"; // Genera error al retornar por el tipo de dato
};
funcion();

// Number function 
let funcion2 = (): number =>{
    // console.log("Number function");
    return 10;

    // return "String"; // Genera error al retornar por tipo de dato
};
funcion2();

// Tipos de datos en parametros - radio = Parámetro
let circleArea = (radio: number): number=>{ 
    let area = Math.PI * Math.pow(radio, 2); //Eleva a cierto valor
    return area;
};
let area: number;
area = circleArea(5); // radio = Argumento

// console.log(area);


// Parámetros de tipo union
function mensaje(msg: string | number): void {
    // console.log(msg);
}
mensaje(100);
mensaje("abc");

//mensaje2(false); // Genera error al intentar por tipo de dato


// Parámetros de tipo Alias
type TipoMensaje = string | number;

function mensaje2(msg: TipoMensaje): void {
// console.log(msg);
}
mensaje2(20);
mensaje2("20");

//mensaje3(false); // Genera error al intentar por tipo de dato


// Definición de parámetros opcionales
const incrementarV1 = (valor1: number, valor2?: number): number => {
    return valor2 ? valor1 + valor2 : valor1 + 1;
};

let r1: number = incrementarV1(10, 20);
// console.log(r1); // 30

let r2: number = incrementarV1(100);
// console.log(r2); // 101


// Definición de parámetros con valor por default
const incrementarV2 = (valor1: number, valor2: number = 10): number => {
    return valor1 + valor2;
};
  
let r3 = incrementarV2(30, 20);
// console.log(r3); // 50

let r4 = incrementarV2(200);
// console.log(r4); // 210


// Definición del signature de una función
// signature => Declaración y especificación de tipos para los parámetros y el tipo de retorno.
let mostrarMensaje: (a: string, b: string) => void;

// Crea la función respetando la definición del signature
mostrarMensaje = (nombre: string, apellido: string) => {
  console.log(`${nombre} ${apellido}`);
};

// mostrarMensaje("Yesid", "Martinez");