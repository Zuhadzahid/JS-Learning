// string indexing 

// H e l l o   W o r l d (String)
// 0 1 2 3 4 5 6 7 8 9 10 (Indexes)

let firstName = "Hello World";

// first we find the legth of the string 

console.log(firstName.length);

// the legth of string is 11 because space is also consider in the length 

// now try to find specific index of our string 

console.log(firstName[6]);
console.log(firstName[7]);
console.log(firstName[8]);
console.log(firstName[9]);
console.log(firstName[10]);

// Now we want to find the last character of the string which we don't know what it was in the any case so we can find 

console.log(firstName[firstName.length-1]);

// similarlay 

console.log(firstName[firstName.length-3]);
console.log(firstName[firstName.length-11]);
console.log(firstName[firstName.length-2]);
