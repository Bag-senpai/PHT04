// array creation
let countries = ["Philippines", "America", "Lebanon", "Japan", "Korea"];
console.log(countries);

// array length
// array.length
console.log(countries.length);

// accessing individual elements
// array[index]
console.log(countries[0]);
console.log(countries[2]);

// push - adds elements in the end of the array
// array.push(elements)
countries.push("Palawan");
console.log(countries);
countries.push("United Kingdom", "Netherlands", "France");
console.log(countries);

// pop - removes elements from the end of the array
// array.pop()
countries.pop();
console.log(countries);
countries.pop(4); // only removes 1 element from the end
console.log(countries);
countries.pop("America");
console.log(countries); // only removes from the end of the array

// array iteration - iterate on the index
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i])
}

// forEach - iterate on the element
// array.forEach(function(element){code});
countries.forEach(function(country){
    console.log(country);
})

