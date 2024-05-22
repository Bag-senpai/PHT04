// Arrow Functions
const greet = () => console.log("Hello OneCoders!!!");
greet();

const squareArrow = (a) => console.log("Square Arrow:", a * a);
squareArrow(5);

// Template Literals
let name = "Jane";
let age = 25;
//console.log("I'm " + name + " and I am " + age);
console.log(`Hi! I'm ${name} and I am ${age} years old.`);

// Destructuring
// arrays
let nums = [24, 25, 26, 27];
let [first, second, third] = nums;
console.log(first);

// Spread and rest ...
// Spread
function sum(x, y, z) {
    return x + y + z;
}
console.log(sum(24, 25, 26));
console.log(sum(...nums));

// Rest
function myFunction(firstArg, secondArg, ...others) {
    console.log(firstArg);
    console.log(secondArg);
    console.log(others);
}
myFunction("one", "two", "three", "four", "five");

// Default parameters
function multiply(a = 10, b = 5) {
    return a * b;
}
console.log(multiply());
console.log(multiply(1, 5));