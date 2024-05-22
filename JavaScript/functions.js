// functions
// 1. Function Declaration
function greet() {
    console.log("Hello, welcome to functions!");
}
greet();

function squareDeclaration(num) {
    return num * num;
}

console.log("Square for Function Declaration", squareDeclaration(6));

/* function functionName(parameter) {
    code goes here
}
functionName(argument); */

// 2. Function Expression
const squareExpression = function(num) {
    return num * num;
};

console.log("Square for Function Expression", squareExpression(5));

// 3. Function Hoisting
sayHello();

function sayHello() {
    console.log("Hello functions hoisting");
}

// warning - let/var/const function has no hoisting