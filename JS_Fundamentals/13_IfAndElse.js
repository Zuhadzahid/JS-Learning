// If and else conditions

let myAge = 25;

if (myAge >= 28) {
    console.log("You are not eligible");    
}else{
    console.log("You are eligible, enjoy the show");
}

// so in this case else condition will work 

// Question: 
// Check Even or Odd
// Write a program that takes a number as input and checks if it is even or odd.
// now if i have to check the number is even or odd 
// we know any number when divided by even number the reminder must be 0 

let num = 40;

if (num % 2 === 0){
    console.log(typeof num, "this is even");
}else {
    console.log(typeof num, "this is odd");
}

// Question: 
// Check Age for Voting
// Write a program that takes a person's age as input and checks if they are eligible to vote (18 years or older) or not.
// okay so for voting eligibility number has to be greater than 18 

let num4 = 15;

if (num4 >= 18){
    console.log("You are eligible for voting");
}else{
    console.log("You are not eligible for voting");
}

// Question: 
// Positive, Negative, or Zero
// Write a program that takes a number as input and checks whether it is positive, negative, or zero.

let num5 = -9;

if (num5 > 0){
    console.log("Number is poitive");
}else {
    console.log("Number is Negative");
}

// Question: 
// Write a JavaScript program that takes three numbers as 5, 8 and 6 from the variable. Determine and print the largest number among the three. If all numbers are equal, print "All numbers are equal." 
// Take three numbers as input

var num1 = 5;
var num2 = 8;
var num3 = 6;

// Compare the numbers using simple if-else
if (num1 === num2 && num2 === num3) {
    console.log("All numbers are equal.");
} else {
    if (num1 >= num2 && num1 >= num3) {
        console.log("The largest number is: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("The largest number is: " + num2);
    } else {
        console.log("The largest number is: " + num3);
    }
}
