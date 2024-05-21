// Creating arrays
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits);

// Accessing individual elements
// Third fruit
console.log("Third fruit:", fruits[2]);
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying elements
fruits[1] = "grapes";
console.log(fruits);

// .push - adds an element at the end
fruits.push("banana");
console.log(fruits);

// .pop - removes an element at the end
fruits.pop();
console.log(fruits);

// array iteration
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruits:", fruits[i]);
}

// forEach
colors = ["red", "blue", "yellow"];
colors.forEach(function (color) {
    console.log(color);
});

// Array methods
let numbers = [1, 2, 3, 4, 5];

// length
console.log("Array length:", numbers.length);

// indexOf
console.log("Index of 3:", numbers.indexOf(3));

// join
console.log("Joined array:", numbers.join("-"));

// slice
let slicedArray = numbers.slice(1, 3); // start is included, end is excluded
console.log(slicedArray);

// splice
let removedElements = numbers.splice(1, 3); // (<start>, <number of elements to remove>)
console.log("Removed elements:", removedElements);
console.log("Updated array:", numbers);