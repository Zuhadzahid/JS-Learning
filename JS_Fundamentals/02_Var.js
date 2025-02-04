"use strict"

// Ignore this word above now below you will understand what is this focus with the first variable

// Make a first variable and change its value 

var firstName = "Hello";
console.log(firstName);

// change the value of this above variable 

firstName = "World";
console.log(firstName);

// make two different variable

var fName = "Code"
console.log(fName);

var SName = "Spaces";
console.log(SName);

// both variables combined printing 

console.log(fName + ' ' + SName);

// make variable without using var beacause by default javascript make the varibale of "var" if we do not use the word var 

fN = "Learn";

sN = "ing";

console.log(fN + sN);

// now if we use the word "use strict" in the top so javacsript doesnot make the varibale wtihout intializing
//  the word var before our value so solving this error you have to put the word var before fN or sN basically
// you will make var as let work by using this word in the top use strict.

fN = "Learn";

sN = "ing";

console.log(fN + sN);

// this error is came when i put the "use strict" on the top
// ReferenceError: fN is not defined
//     at Object.<anonymous> (/workspaces/JS-Learning/JS_Fundamentals/Variables.js:26:4)