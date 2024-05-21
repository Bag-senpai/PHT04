// Conditional Statements
// if
let number = 25;

if (number > 23) {
    console.log("You are greater than 23!");
}

// if-elseif-else
if (number > 25) {
    console.log("You are greater than 25!");
}
else if (number < 25){
    console.log("You are less than 25!")
}
else {
    console.log("You are equal with 25");
}

// switch
let day = "Tuesday";
switch (day){
    case "Monday":
        console.log("Today is the start of the weekdays");
        break;
    case "Friday":
        console.log("Today is the end of the weekdays!");
        break;
    default:
        console.log("Meh today's just a regular day :3.");
}

// loops
// for loops
for (let i = 1; i <= 5; i++){
    console.log("For Loop Count:", i);
}
//while loop
let count = 1;
while (count <= 5){
    console.log("While Loop Count:", count)
    count++;
}

//do while loop
let j = 1;
do {
    console.log("Do while loop count:", j);
    j++;
} while (j <= 5);

let input = "";
do {
    input = prompt("Please enter your name:")
} while ((input == ""));