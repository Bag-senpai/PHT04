let score = 0;
score = prompt("Please enter your score.")

while(true){
    if (score == ""){
        score = prompt("You haven't entered anything! Please enter your score.")
        continue;
    }
    if (isNaN(score)){
        score = prompt("Please enter a numerical score.");
        continue;
    }
    else if (score % 1 != 0){
        score = prompt("Only enter integers. No decimals!");
        continue;
    }
    else if (score > 100 || score < 0){
        score = prompt("The number you've entered is out of range. Only 0-100 is allowed.")
        continue;
    }
    break;
}
console.log(typeof score);
if (score >= 90){
    console.log("Your grade is A. :D");
} else if (score >= 80){
    console.log("Your grade is B. :)");
} else if (score >= 70){
    console.log("Your grade is C. :|");
} else if (score >= 60){
    console.log("Your grade is D. D:");
} else {
    console.log("Your grade is F. :<");
}