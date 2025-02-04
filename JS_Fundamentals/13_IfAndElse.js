// If and else conditions

let myAge = 25;

if (myAge >= 28) {
    console.log("You are not eligible");    
}else{
    console.log("You are eligible, enjoy the show");
}

// so in this case else condition will work 

// now if i have to check the number is even or odd 
// we know any number when divided by even number the reminder must be 0 

let num = 40;

if (num % 2 === 0){
    console.log(typeof num, "this is even");
}else {
    console.log("this is odd");
}


Question:
// Write a JavaScript program that takes three numbers as 5 ,8 and 6 from the variable. Determine and print the largest number among the three. If all numbers are equal, print "All numbers are equal." 

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
