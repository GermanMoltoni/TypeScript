interface Animal {
name: string;
makeSound();
}

class Dog implements Animal{
    name : string;
    constructor(name:string){
        this.name = name;
    }
    makeSound(){
        return "Guau!";
    }
}

class Cat implements Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    makeSound(){
        return "Miau!";
    }
}

function sayHi(animal : Animal){
    console.log(animal.makeSound());
}

var animales:Array<Animal> = new Array<Animal>();
animales.push(new Dog("Bobby"));
animales.push(new Cat("Bobby"));
animales.forEach(sayHi);