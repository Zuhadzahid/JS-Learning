// typeof operator 
// it tell us the nature of the variable its string or its number or other 

let year = 1999;
let world = "HelloWorld";

console.log(typeof year);
console.log(typeof world);

// convert number to string 
// there is a two way 

// first way 

year = year + "";

// emply paranthesis is a shorcut way to convert number to string 

console.log(typeof year);

// Other way 

age = 32;
age = String(age);
console.log(typeof age);

// convert string to number 
// again there is a two way 

// first way 

world = + world;

// this + sign if we placed the before of our string so it will convert string to number 

console.log(typeof world);

// Other way 

newVar = "Laptop";
newVar = Number(newVar);
console.log(typeof newVar);
