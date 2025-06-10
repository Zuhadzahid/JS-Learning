// Ternary operator or we can say conditional operator 

// in traditional way suppose we have to print the value if the conditions fullfill so it will print this or if not so print something else
// for example
// if the number is less than 5 then print milk else print coffee 

// so in old way we can write our code in a  way ;

let num = 5;
let drink;

if(num > 5){
    drink = "coffee";
}else{
    drink = "milk";
}

console.log(drink);

// so the output will be milk beacuse age is 5 so it fullfuill the condition but too much code for justtify thge condition 
// so we can use ternatory operators or conditional operator 

let num1 = 6;
let drink1 = num1 > 5 ? "You can drink coffee" : "You can drink milk";
console.log(drink1);

// so the output will be you can drink coffee beacuse num1 is 6 so it fullfill the condition 

// so we can use ternary operator if we have to quickly initilize the condition 
// we have to put "?" before this our condition will placed what it want to store in the variable with the help of ":" we can choose our variables what actually will store on it  first it check the condition then it will save the value accoprding to the condition 

// another Example for understanding ternary operator is 
let myNum = 10;
let myAge;

if (myNum > 11) {
    myAge = "Your Age is Above";
}else{
    myAge = "Your supposed to do fun";
}

console.log(myAge);

// You don't need to write above big code that i have written above, we can use instead below code by using ternary operator or conditional operator

let myNum2 = 10;
let myAge2 = myNum2 >= 8 ? "Your Age is above " : "Your supposed to do fun";
console.log(myAge2);
