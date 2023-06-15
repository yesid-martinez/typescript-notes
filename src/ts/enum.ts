// Enum => Permite restringir o limitar el valor de una variable a las constantes definidas en el enum

enum TrainingType {
    TRAINING_RUN, // 0
    INTERVALS, // 1
    LONG_RUN, // 2
}
  
// Declaración y asignación de variable con tipo Enum
let tipoEntrenamiento: TrainingType = TrainingType.TRAINING_RUN;

// Muestra el valor asignado
console.log(tipoEntrenamiento);

// Verificación de valor contra Enum
if (tipoEntrenamiento === TrainingType.TRAINING_RUN) {
console.log("training run");
} else if (tipoEntrenamiento === TrainingType.INTERVALS) {
console.log("intervals");
}