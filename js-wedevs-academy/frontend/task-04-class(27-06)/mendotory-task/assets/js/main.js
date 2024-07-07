// Mandatory Task 1:

function greet(){
    console.log("Hello World, Sabbir Hossen")
}

setTimeout(()=>greet(),10000)

// Mandatory Task 2: 

let count = 0;
let intervalId = null;

function printNumbers() {
  count++;
  if (count > 10) clearInterval(intervalId);
  else console.log(count);
}

intervalId = setInterval(() => printNumbers(), 1000);

// Mandatory Task 3: 

function handleError() {
    throw new Error("make error");
  }
  
  try {
    handleError();
  } catch (error) {
    console.log("I have handled the error successfully.");
  }


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