// JS Operators - symbols or keywords to perform operators
// JS Expressions

// Arithmetic Operators and Expressions
let a = 10;
let b = 5;

// Addition
// a = a + b;
// console.log(a);

// Compound Assignment Operator

a += b;
console.log(a);

// Subtraction
a -= b;
console.log(a);

// Multiplication
a *= b;
console.log(a);

// Division
a /= b;
console.log(a);

// Modulo
a %= b;
console.log(a);

// What if compute before compound assignment?
a += b - a;
console.log(a);

// Concatenation
console.log("Hello" + " " + "World" + " " + a + " " + b);

// Comparison
let x = 10;
let y = 5;

console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x == y); // equal to
console.log(x >= y); // greater than or equal to
console.log(x <= y); // less than or equal to
console.log(x != y); // not equal (less than or greater than)

// Type Coercion
console.log(50 == "50"); // true, loose equality
console.log(50 === "50"); // false, strict equality

// Logical Operators
let sunny = true;
let warm = false;

console.log("Sunny AND Warm:" + sunny && warm); // CAUTION: Type Coercion
console.log("Sunny AND Warm:", sunny && warm); // AND - &&
console.log("Sunny OR Warm:", sunny || warm); // OR - ||
console.log("Not sunny:", !sunny); // NOT - !

// Unary operators (++, --)
let num = 1;
num++; // +1 to num
console.log(num);
num--; // -1 to num
console.log(num);

// Ternary Operators - (<boolean / condition> ? <result if true> : <result if false>)
let activeStatus = false;
let member = (activeStatus ? "Registered" : "Not registered")
console.log(member);

// typeof Operator
console.log(typeof activeStatus);
console.log(typeof member);