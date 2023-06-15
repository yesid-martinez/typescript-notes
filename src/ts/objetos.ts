//Definir clase
class Training {
    type: string = "";
    distance: number = 0;
    date: string = "";
};

// Instansiar clase
const firstTraining = new Training();
const secondTraining = new Training();

// Asigna valores a los atributos de los objetos
firstTraining.distance = 2;
secondTraining.distance = 6;

// console.log(firstTraining);
// console.log(firstTraining.distance);


// Definir clase con constructor
class Training2 {
    type: string;
    distance: number;
    date: string;

    constructor(){
        this.type = "Date";
        this.distance = 10;
        this.date = "30-04-2004";
    }
    
};

let tr2 = new Training2();

// console.log(tr2);


// Definir clase con un método
class Training3 {

    // _ => Diferencia e indica que es un atributo 
    public _type: string;
    public _distance: number;
    public _date: string;
    private _comments: string;

    constructor(type: string, distance: number, date: string = "Fecha", comments: string){
        this._type = type;
        this._distance = distance;
        this._date = date;
        this._comments = comments;
    }

    // Obtener propiedad privada
    private get getComments(){
        return this._comments
    }

    // Setter => Modifica la propiedad privada
    private set getComments(newStatus: string){
        this._comments = newStatus
    }
};

const tr3 = new Training3("type", 10, "date", "Nuevo comentario");
//Podríamos hacer una sobrecarga de constructores añadiendo nuevos objetos

// console.log(tr3);




// Forma simplificada de hacer un constructor
class NewConstructor{
    constructor(
        public _sport: string = "Skateboarding",
        readonly _score: number = 0,
        private _company: string = ""
    ){}

    get getSport(){
        return this._sport
    }
    
    set setSport(sport: string){
        this._sport = sport;
        this._company = "The company has been changed";
    }
}
let newC = new NewConstructor("Basketball", 2, "Chicago bulls")
console.log(newC);

newC.setSport = "Surf"
console.log(newC);


