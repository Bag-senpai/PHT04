// Exercise

/*
We have an array of numbers with elements of numbers 1 to 10.
Using this snippet below, remove the even numbers. Upon output,
the array numbers must show odd numbers.

Limitations:
- You can only use index "i" to access the numbers array.
- Use the array.splice method.
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numbers.length; i++){
    // insert additional code here
}

console.log(numbers); // print array of odd numbers
// [1, 3, 5, 7, 9]































// CHALLENGE

/* 
We have an array of numbers with elements of numbers 1 to 10.
Using this snippet below, not only do you have to remove the even
numbers, but you'll also have to push them inside the evennumbers
array. Upon output, the array numbers must show odd numbers, while
the evennumbers array must show even numbers. You can use the array
evennumber as a placeholder.

Limitations:
- You can only use index "i" to access the numbers2 array.
- Use the array.splice method.

Hint:
evennumber = _____._____(__, __); // remove even number and assign it
to evennumber
evennumbers = _____._____(_____[___]); // access an element a certain
array and add it to the evennumbers array
*/

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennumbers = []; // array of even numbers
let evennumber = []; // placeholder

for(let i = 0; i < numbers.length; i++){
    // insert additional code here
}

console.log(numbers2); // print array of odd numbers
// [1, 3, 5, 7, 9]
console.log(evennumbers); // print array of even numbers
// [2, 4, 6, 8, 10]
