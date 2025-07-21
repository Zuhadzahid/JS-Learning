// Nested If else work as a  if else if else conditions 
// suppose we have a guess number 19
// and if the user guess less than 19 so it show that you lose 
// and if the user guess more than 19 also shows better luck next time 
// and if the user guess 19 so show a message you won 

// so for this we have to tak a number as an input for the user 

let winningNumber = 19;
let guessNumber = +prompt("Plz guess the winning number");

// Here prompt function will not work in web so we have to make the indexed.html file for it sot hat i can open in the browser

console.log(guessNumber, typeof(guessNumber));

// Okay so it work well in the browser with index.html and if you wnat to see the output it will come as a (14, number) 
// and you can only see in the console by inspecting the local host server where you will prompt the guess number 

// Now we will made our upper guessing code with nested if else

if (guessNumber === winningNumber) {
    console.log("your guess is correct");
} else {
    if (guessNumber > winningNumber) {
        console.log("Your guess is High");
    } else {
        console.log("Your guess is Low");
    }
}



// This is for Node.js code for the same upper guessing question from the terminal beacue it not see in the terminal with 
// prompt and alert function beacuse these are for browsers functions.

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const winningNumber = 19;

// rl.question("Please guess the winning number: ", (input) => {
//   const guessNumber = +input;
//   console.log(guessNumber, typeof guessNumber);

//   if (guessNumber === winningNumber) {
//     console.log("🎉 Correct Guess!");
//   } else {
//     console.log("❌ Wrong guess, try again!");
//   }

//   rl.close();
// });

