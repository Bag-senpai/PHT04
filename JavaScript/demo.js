// create arrays
let countries = ["Philippines", "Australia", "Cambodia", "Thailand"];
console.log(countries);

// arrays start at index 0
// array.length
console.log(countries.length);

// access individual elements
// arrayname[index]
console.log(countries[0]);
console.log(countries[1]);

// modifying elements
// arrayname[index] = newelement
countries[2] = "Laos";
console.log(countries);

// push
// places elements to the end of the array
// array.push(elements); -multiple elements can be added
countries.push("Cambodia");
console.log(countries);
countries.push("United States", "Netherlands", "France");
console.log(countries);

// pop
// removes elements from the end of the array
// array.pop()
countries.pop();
console.log(countries);
countries.pop(3);
console.log(countries); // only one element can be removed in pop()
countries.pop("Australia");
console.log(countries); // only element in the end of the array gets removed

// array iteration
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i]);
}

// foreach
// array.foreach(function(paramaters){code})
countries.forEach(function(element){
    console.log(element);
})

// array methods
// array.length

// array.indexOf(element);
console.log(countries.indexOf("Australia")); // outputs element index
// outputs -1 if element is not in the array
console.log(countries.indexOf("Mexico"));

// array.join(separator);
console.log(countries.join("-"));

// array.slice(starting index inclusive, last index exclusive);
let countries2 = countries.slice(0, 4);
console.log(countries2);

// array.splice(starting index inclusive, last index exclusive);
let removedCountries = countries.splice(0, 4);
console.log(countries);
console.log(removedCountries);

