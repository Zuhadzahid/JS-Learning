// trim() method 

let firstName = "         HelloWorld       "
console.log(firstName.length);

// now the string length must also include the spaces but this trim method will help us to reduce the spaces of to and forth but not reduce the spaces in between of the string
// so for this we have to copy the variable on another variable or we can also use the same varaiable because string is immutable

// one way 
firstName = firstName.trim();
console.log(firstName);

// 2nd way 
let newString = firstName.trim();
console.log(newString);
console.log(newString.length);

// yes it shows the 10 characters but the index is start from 0 
console.log(newString[newString.length-1]);

// TO UpperCase() Method 

// so for change the string in the upper case() & Lower case() we have to initialize the new string beacause string is immutable 
// we can not write like this > firstName.toUpperCase(); or otherName.toLowerCase(); it will not work beacuse it has to be stored in new string that's why eithwe we initialize the new varaibale or copy the same variable below are the both ways written.

console.log(firstName.toUpperCase());
// another way 
otherName = firstName.toUpperCase();
console.log(otherName);

// similarlay for the To LowerCase() method 

console.log(otherName.toLowerCase());
// another way 
anotherName = otherName.toLowerCase();
console.log(anotherName);

// slice() method  
// Now for example i want only half string or any particular character in our string so we can use slice() method 
// in slicing method we should know the start index and end index

let newVariable = "HelloWorld";
console.log(newVariable.slice(0,2)); //Output : He why ? beacuse it go to the index 2 but does not include the index 2 so remeber that

otherVar = newVariable.slice(0,5);
console.log(otherVar);

// or if we just want to skip some index and then we want our all string so we can do in a way 

otherVar = newVariable.slice(5);
console.log(otherVar);






