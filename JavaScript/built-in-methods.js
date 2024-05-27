// Strings
// length
const sampleString = "Welcome to";
const strLength = sampleString.length;
console.log(strLength);

// .split
const message = "Hello, OneCoders!";
const words = message.split(", ");
console.log(words);

// .includes
const sentence = "The quick brown fox jumps over the lazy dog.";
const containsWord = sentence.includes("fox");
console.log(containsWord);
console.log(sentence.includes("mango"));

// Math
// max
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

// min
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// round-down
const roundedFloor = Math.floor(3.9);
console.log(roundedFloor);

// round-up
const roundedCeil = Math.ceil(3.1);
console.log(roundedCeil);

// round-off
const rounded = Math.round(3.5);
console.log(rounded);

// random - 0 (inclusive) and 1 (exclusive)
const randomValue = Math.random();
console.log(randomValue);

// get random integer
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomInt(1, 3));

// Number.toFixed()
const fixedNumber = Math.PI;
console.log(fixedNumber.toFixed(2));

// Date()
const currentDate = new Date();
console.log(currentDate);