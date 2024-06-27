// Mandatory Task 1:

// Global Context:

function showThis() {
    console.log(this);
}

showThis();

// Object Method:
const obj = {
    name: 'Object',
    showThis: function() {
        console.log(this);
    }
};

obj.showThis(); 

// Constructor Function:
function Person(name) {
    this.name = name;
}

const person = new Person('Alice');
console.log(person.name); 

// Arrow Function:
const arrowFunc = () => {
    console.log(this);
};

arrowFunc();

// Event Handler:
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // this refers to the element that received the event
});




// Mandatory Task 2: 


// Utility Function:


function getArea() { 
   return this.width * this.height; 
} 

// Object 1 
const rectangle = { 
   width: 10, height: 20 
}; 

// Object 2 
const square = { 
   width: 15, height: 15 
};

// Using call
const rectangleAreaCall = getArea.call(rectangle);
console.log(rectangleAreaCall); // Output: 200

const squareAreaCall = getArea.call(square);
console.log(squareAreaCall); // Output: 225

// Using bind
const rectangleAreaBind = getArea.bind(rectangle);
console.log(rectangleAreaBind()); // Output: 200

const squareAreaBind = getArea.bind(square);
console.log(squareAreaBind()); // Output: 225


// Mandatory Task 3: 

// Using Class Syntax:

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.online = false;
    }
    
    login() {
        this.online = true;
        console.log(`${this.name} is now online.`);
    }
    
    logout() {
        this.online = false;
        console.log(`${this.name} is now offline.`);
    }
}

const User1 = new User('Zohan', 'zohan@example.com');
User1.login(); // Output: Zohan is now online.



// Using Constructor Function:
function User(name, email) {
    this.name = name;
    this.email = email;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(`${this.name} is now online.`);
};

User.prototype.logout = function() {
    this.online = false;
    console.log(`${this.name} is now offline.`);
};

const User2 = new User('Zohan', 'zohan@example.com');
User2.login(); // Output: Zohan is now online.