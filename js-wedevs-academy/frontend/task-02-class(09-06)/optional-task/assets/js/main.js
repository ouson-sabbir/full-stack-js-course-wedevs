//Task One


// For Loop:
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers(); // Output: 1 2 3 4 5 6 7 8 9 10



// While Loop:
function printEvenNumbers() {
    let i = 2;
    while (i <= 20) {
        console.log(i);
        i += 2;
    }
}
printEvenNumbers(); // Output: 2 4 6 8 10 12 14 16 18 20


// dowhile loop
function printOddNumbers() {
    let i = 1;
    do {
        console.log(i);
        i += 2;
    } while (i < 20);
}
printOddNumbers(); // Output: 1 3 5 7 9 11 13 15 17 19





//Task  Two


function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return 'Sunday';
        case 2:
            return 'Monday';
        case 3:
            return 'Tuesday';
        case 4:
            return 'Wednesday';
        case 5:
            return 'Thursday';
        case 6:
            return 'Friday';
        case 7:
            return 'Saturday';
        default:
            return 'Invalid day number';
    }
}
console.log(getDayName(3)); // Output: Tuesday
console.log(getDayName(7)); // Output: Saturday
console.log(getDayName(0)); // Output: Invalid day number






//Task  Three

function testFunctionScope() {
    var insideFunction = 'I am inside the function';
    console.log(insideFunction);
}

testFunctionScope();

function testBlockScope() {
    if (true) {
        let insideBlock = 'I am inside the block';
        console.log(insideBlock);
    }
}

testBlockScope();





//Task Four


// 1.Basic IIFE:
(function() {
    console.log('This is an IIFE');
})();

// 2. IIFE with Parameters
(function(x, y) {
    console.log(x + y);
})(10, 5);


//3. IIFE to Avoid Polluting Global Scope
(function() {
    var localVariable = 'I am local to the IIFE';
    function localFunction() {
        console.log(localVariable);
    }
    localFunction();
})();




