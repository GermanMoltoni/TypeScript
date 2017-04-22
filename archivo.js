var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        return "Guau!";
    };
    return Dog;
}());
var Cat = (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.makeSound = function () {
        return "Miau!";
    };
    return Cat;
}());
function sayHi(animal) {
    console.log(animal.makeSound());
}
var animales = new Array();
animales.push(new Dog("Bobby"));
animales.push(new Cat("Bobby"));
animales.forEach(sayHi);
