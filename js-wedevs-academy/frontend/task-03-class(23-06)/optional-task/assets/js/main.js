// Optional Task: 


// Constructor function for Animal
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
};

// Constructor function for Dog that inherits from Animal
function Dog(name, breed) {
    Animal.call(this, name); // Call the Animal constructor
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    console.log(`${this.name} is barking.`);
};

const dog1 = new Dog('Buddy', 'Golden Retriever');
dog1.eat(); // Output: Buddy is eating.
dog1.bark(); // Output: Buddy is barking.   