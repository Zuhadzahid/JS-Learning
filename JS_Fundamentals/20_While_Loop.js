// We have to print a number in 0 to 9 
// So we have multiple ways for doing it 
// we cna print one by one number but its very tidious work or we can increment each word and print after increment it also very tidious work to do
// So for DRY (don't repeat yourself) say's code does not have to repeat
// So we cna use While Loop here 

let i = 0;

while (i<=9) {
    console.log(i);
    i++;  
}
console.log(`Current value of i is ${i}`);

// so first it satisfied the condition and when the condition got failed i mean when i value becomes 10 so it will stop while loop

// for print numbers in the array form or in sequence like , 0,1,2,3,4... 

let result = " ";
while (i<=15) {
    result += i + " ";
    i++;  
}
console.log(result);
console.log(`Current value of i is ${i}`);

// Another Example of While Loop 

let j = 0;
let check = " ";
while (j<=8) {
    check += j + " ";
    j++;  
}
console.log(check);
console.log(`Current value of j is ${j}`);

// While Loop Example 
// sum of all numbers individually of 10 

let num = 0;
let total = 0;
while (num <= 10) {
    total = total + num;
    num++;
}
console.log(total);

// Now if i want to implememnt this without while loop so we will do in this way 

let val = 10;
// A mathemetical formula for sum of all numbers is 
let sumOfAll = (val*(val+1))/2; 
console.log(sumOfAll);
