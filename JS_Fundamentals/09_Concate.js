// string concatenation 
// concatenation means adding the variables or combine them 

let string1 = "Hello";
let string2 = "World";

let fullName = string1 + string2;

console.log(fullName); //output: HelloWorld now i want some space so i can do ;

otherName = string1 + " " + string2;

console.log(otherName); //output: Hello World 

// now suppose we have a number in a  string and we want to concatenate but we want to plus them so how we can do ?

let string3 = "19";
let string4 = "99";

let string5 = string3 + string4;
console.log(string5); // output will be 1999 but we want to add , now it consider it a string that's why give the output 1999 instead of adding so we have to change his datatype

let string6 = +string3 + +string4;
console.log(string6); // output 118
console.log(typeof string6); // output is number
