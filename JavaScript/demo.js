// Creating array
let names = ["Bernard", "Alex", "Janine", "Zyra"];
console.log(names);

// Length of arrays
console.log(names.length);

// Accessing array elements
console.log(names[1]);
console.log(names[2]);
console.log(names[names.length - 1]);

// Modifying Elements
names[0] = "Lyra";
console.log(names);
names[1] = "Alexie";
console.log(names);

// Push
names.push("Bernard");
console.log(names);
names.push("Alex", "Sarah", "Lexi"); // pushes multiple elements
console.log(names);

// Pop
names.pop();
console.log(names);
names.pop("Alexie");  // does not remove Alexie, removes at end
console.log(names);
names.pop(2);         // does not remove 2 elements, just one
console.log(names);

// Array Iteration
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// forEach
names.forEach(function(name){
    console.log(name);
});

// Array Method
// Length

// indexOf
console.log(names.indexOf("Bernard"));
console.log(names.indexOf("Zyra"));
console.log(names.indexOf("Sarah"));

// Join
console.log(names.join("/"));

// Slice (start - included, end - excluded)
let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers.slice(0, 2));
// console.log(numbers.slice(2, 5));

// Splice 
let removedNumbers = numbers.splice(0, 2);
console.log(removedNumbers);
console.log(numbers);

