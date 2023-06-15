class User{
    constructor(private user: string, private age: number){}

    // Getter => Permite acceder al valor de una propieda privada
    get getUserName(): string{
        return `Welcome ${this.user}, your age is ${this.age}`
    };
};

const newUser = new User("Yesid", 19);

console.log(newUser);
console.log(newUser.getUserName);



// Herencia
class Info extends User{
    constructor(user: string = "UserAccount", age: number = 18, private bio: string = "Nothing here, you can write anything"){
        super(user, age);
    }

    get getBio(){
        return this.bio
    };
};

let info1: Info = new Info("Axel", 21);

console.log(info1);
console.log(info1.getBio);

// Utiliza el método de la clase padre
console.log(info1.getUserName);


