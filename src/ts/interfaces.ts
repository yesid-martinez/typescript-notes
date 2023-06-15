// Interface => Define las caracteristicas que debe tener una clase
// Permiten a un software ser más flexible y exteneder su funcionalidad
// Contrato => Obligatoriedad

interface IShape{
    color: string
    area(): number
    draw(): void
}

class Square implements IShape{
    constructor( public color: string, public value: number){
        this.color = color
    }

    // Calcula el area del cuadrado
    area(): number {
        return Math.pow(this.value, 2)
    }

    draw(): void {
        const cssClass = `color: ${this.color}`
        console.log(`%cThe square has an area of: ${this.area()}`, cssClass)
    }
}

class Circle implements IShape{
    constructor( public color: string, public value: number){
        this.color = color
    }

    // Calcula el area del circulo
    area(): number {
        return Math.PI * Math.pow(this.value, 2);
    }

    draw(): void {
        const cssClass = `color: ${this.color}`
        console.log(`%cThe circle has an area of: ${this.area()}`, cssClass);      
    }
}

class Triangle implements IShape{
    constructor( public color: string, public base: number, public height: number){
        this.color = color
    }

    // Calcula el area del triangulo
    area(): number {
        return (this.base * this.height) / 2
    }

    draw(): void {
        const cssClass = `color: ${this.color}`
        console.log(`%cThe triangle has an area of: ${this.area()}`, cssClass);      
    }
}

// Define un objeto por su interface
let shape1, shape2: IShape;

shape1 = new Square("red", 17)
shape2 = new Circle("blue", 23)

shape1.draw();
shape2.draw();



// Arreglo de objetos con que cumplen con la interface
let shapes: IShape[] = [];

// Agrega objetos que cumplen con la interface
shapes.push(new Circle("magenta", 10));
shapes.push(new Square("cyan", 5));
shapes.push(new Circle("orange", 5));
shapes.push(new Triangle("white", 2, 3));
shapes.push(new Circle("green", 5));
shapes.push(new Triangle("gray", 10, 20));

// Invoca el método de cada objeto que está definido por la interface
shapes.forEach((shape) => shape.draw());