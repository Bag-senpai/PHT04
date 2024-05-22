// Exercise 3.1
function greet(name) {
    console.log("Hello! My name is", name + "!");
}
greet("Bernard");

// Exercise 3.2
let globalVar = "global";
function local() {
    let globalVar = "local";
    console.log(globalVar);
}
local();
console.log(globalVar);


// Exercise 3.3
function mathOperation(a, b, operation) {
    operation(a, b);
}
function add(a, b) {
    console.log("The sum is", a + b + ".");
}
function subtract(a, b) {
    console.log("The difference is", a - b + ".");
}
function multiply(a, b) {
    console.log("The product is", a * b + ".");
}
function divide(a, b) {
    if (b != 0){
        console.log("The quotient is", a / b + ".");
    }
    else {
        console.log("Division by 0 is not allowed.");
    }
}
mathOperation(3, 3, add);
mathOperation(3, 3, subtract);
mathOperation(3, 3, multiply);
mathOperation(3, 3, divide);
