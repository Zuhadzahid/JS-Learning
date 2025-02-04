// boolean 
// either it gives true or false 

let num1 = 123;
let num2 = 123;
let num3 = 456;
let num4 = "456";

console.log(typeof num4);


// now for check comparison we can check like that 

console.log(num1 > num2);
console.log(num1 < num2);

// output will be false 

console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num3 >= num4);

// output will be true whether num4 is string but it will not check type of it will gives the true or false by checking it is same or not

// compariosn operator == and === 

console.log(num1 == num2);
console.log(num3 == num4);

// output will be true again but for checking datatype we use ===

console.log(num1 === num2);
console.log(num3 === num4);

// output will be tru and false 

// compariosn checking != and !== 

console.log(num3 != num4);
console.log(num1 != num2);

// output will be false because they are equal so it gives false it false the statement they are saem  number so it gives false 

console.log(num3 !== num4);
console.log(num1 !== num2);

// now it will also check the datatpes so it will gives us true and false bcz num3 and num 4 are not equal in datatypes
