// Tipo implicito -> JS Style
let a = 20;
console.log(a);

// Tipo explicito -> TS Style
// Tipos primitivos
let days: number;
let answer: boolean;
let fName: string;

days = 6;

//Tipo union
let identificador: number | string;

identificador = 10;
identificador = "Diez";

// Tipo alias -> Perzonalizados
type stringOrNumber = string | number;

let tipoStrNmbr: stringOrNumber;

tipoStrNmbr = 8;
tipoStrNmbr = "Frontend";

//Tipo de dato any
//Elimina las restricciones de tipos y permite cualquier tipo de valor sin comprobaciones adicionales
let dato: any;

dato = "Tratar de no usar este tipo de dato";
dato = false
dato = 10;

// Tipo de dato unknown
// Requiere que se realicen verificaciones de tipo explícitas antes de usar la variable.
// El uso de "unknown" promueve una mayor seguridad de tipos y ayuda a evitar errores comunes al trabajar con datos de tipo desconocido.

let dato2: unknown;

dato2 = 5;
dato2 = "Frontend";

// Verificación de tipo de dato
if (typeof dato2 === "number") {
  // Solo se permite realizar operaciones numéricas después de la verificación de tipo
  let resultado = dato2 + 10;
  console.log(resultado);
} else {
  // Manejo de otro tipo de valores
  console.error("Tipo de dato erróneo")
}