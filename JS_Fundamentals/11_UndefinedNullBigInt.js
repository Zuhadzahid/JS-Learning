// Undefined 
// in js undefined means there is no variable assign 

let myName;
var myAge;

console.log(myAge, myName);

// output will be undefined undefined 

// now i can change my value later as well or assign variable after the initiliaze 

myAge = "20";
myName = "World";

console.log(myName , myAge);
console.log(typeof myName, typeof myAge);

// Output will be World 20 & string number


// Null 

// in javascript 0 means 0 and null mean null, null doesn't means 0 

let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);
console.log(typeof null);

// output will be null & object now when i find typeof any null value so it gives me the object in the output why ? so just remember that this is  a bug in javascript and it is very old bug so JS team decided to not fix it beacuse if they fix it so they have to fix it all over the code around the world so it can not possible that's why but its a bug.

myVariable = "Laptop"
console.log(typeof myVariable, myVariable);

// output will be now string Laptop 

// BigInt 

// in js there is a fix number value and tis length so how much that length its available for us by default 

console.log(Number.MAX_SAFE_INTEGER);

// output is 9007199254740991 
//  now suppose if we have a big number instead of above value so then we will use bigint data type its new data type 

let myNumberLength = 1212213435676875211589096432217886632245678;
console.log(myNumberLength);

//  so the output will be 1.2122134356768752e+42 look like this 
// but if we initilize big int so the number will be come as it is 

// initialize BigInt, there are two ways;

// one way: 

myNumberLength = BigInt(1212213435676875211589096432217886632245678);
console.log(myNumberLength);

// second way: 

myAnotherNumberLength = 121221343567678n;
console.log(myAnotherNumberLength);

// we can also add BigInt together but make sure another number also initiliaze big int otherwise it gives an error it wont add 

console.log(typeof myNumberLength, typeof myAnotherNumberLength, myNumberLength + myAnotherNumberLength);

// it will also show the bigint type of on the output.


