// Mandatory Task 1:

function createGreeting(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(createGreeting("Zohan", 25));

// Mandatory Task 2: 

function calculateArea(length, width = length) {
  return length * width;
}

console.log(calculateArea(5)); // Output: 25
console.log(calculateArea(5, 10)); // Output: 50

// Mandatory Task 3: 

function getStreetName(user) {
  return user.address?.street?.name || "Street not found";
}

const user = {
  address: {
      street: {
          name: "CR Dutta Road"
      }
  }
};

const userWithoutStreet = {
  address: {}
};

console.log(getStreetName(user)); // Output: CR Dutta Road
console.log(getStreetName(userWithoutStreet)); // Output: Street not found

// Mandatory Task 3: 

function handleError() {
  throw new Error("make error");
}

try {
  handleError();
} catch (error) {
  console.log("I have handled the error successfully.");
}


// Mandatory Task 4: 

function checkCondition() {
  return new Promise((resolve, reject) => {
    let condition = Math.random() > 0.5; // Example condition: 50% chance to resolve or reject
    if (condition) {
      resolve("I am resolved");
    } else {
      reject("I am rejected");
    }
  });
}

// Call the Promise and handle the result
checkCondition()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });