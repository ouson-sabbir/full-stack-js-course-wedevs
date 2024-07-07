// Optional Task-01: 


// Function that returns a Promise which resolves after a given number of seconds
function delayedMessage(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello after ${delay} seconds`);
        }, delay * 1000);
    });
}

// Async function to call delayedMessage and handle the resolved message
async function handleMessage() {
    try {
        const message = await delayedMessage(5); //  the number of seconds delayed
        console.log(message);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Call the async function
handleMessage();


// Optional Task-02: 


function retryOperation(operation, maxRetries) {
    return new Promise((resolve, reject) => {
      let attempts = 0;
  
      function attempt() {
        attempts++;
        operation()
          .then((result) => {
            console.log(`Attempt ${attempts} succeeded`);
            resolve(result);
          })
          .catch((error) => {
            console.log(`Attempt ${attempts} failed, retrying...`);
            if (attempts < maxRetries) {
              attempt();
            } else {
              reject(`Operation failed after ${maxRetries} attempts`);
            }
          });
      }
  
      attempt();
    });
  }
  
  // Example operation that succeeds or fails randomly
  function exampleOperation() {
    return new Promise((resolve, reject) => {
      const success = Math.random() > 0.5; // 50% chance of success
      if (success) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    });
  }
  
  // Use the retryOperation function with the example operation
  retryOperation(exampleOperation, 5)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });


    // Optional Task-03: 

    async function fetchDataFromSource1() {
        console.log("Fetching data from source 1...");
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if (!response.ok) {
                throw new Error("Error fetching data from source 1");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Error fetching data from source 1");
        }
    }
    
    async function fetchDataFromSource2() {
        console.log("Fetching data from source 2...");
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
            if (!response.ok) {
                throw new Error("Error fetching data from source 2");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error("Error fetching data from source 2");
        }
    }
    
    async function fetchAndProcessData() {
        try {
            const data1 = await fetchDataFromSource1();
            console.log(`Data from source 1: ${JSON.stringify(data1, null, 2)}`);
        } catch (error) {
            console.error(error.message);
            return; // Stop further execution if an error occurs in source 1
        }
    
        try {
            const data2 = await fetchDataFromSource2();
            console.log(`Data from source 2: ${JSON.stringify(data2, null, 2)}`);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    // Call the function to see the output
    fetchAndProcessData();
    