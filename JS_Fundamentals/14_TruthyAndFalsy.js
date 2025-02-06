// Falsy values 

// ""
// false
// null
// undefined
// 0

// these all are considered false values 

// for example 

let firstCondition = "";

if (firstCondition){
    console.log(firstCondition);
}else{
    console.log("The above 1 condition is false so this message will run and print this message");
}

// so now if we put all the falsy values in this code so it always run else block beacuse it always gives the falsy values 

// second condition 
let secondCondition ;

if (secondCondition){
    console.log(secondCondition);
}else{
    console.log("The above 2 condition is false so this message will run and print this message");
}

// third condition 
let thirdCondition = false ;

if (thirdCondition){
    console.log(thirdCondition);
}else{
    console.log("The above 3 condition is false so this message will run and print this message");
}

// fourth condition 
let fourCondition = null ;

if (fourCondition){
    console.log(fourCondition);
}else{
    console.log("The above 4 condition is false so this message will run and print this message");
}

// fifth condition 
let fifthCondition = undefined ;

if (fifthCondition){
    console.log(fifthCondition);
}else{
    console.log("The above 5 condition is false so this message will run and print this message");
}

// six condition 
let sixCondition = 0 ;

if (sixCondition){
    console.log(sixCondition);
}else{
    console.log("The above 6 condition is false so this message will run and print this message");
}

// these all are falsy values so it will gives false and run the true block in if else condition if we apply onto them other than that all are truthy values 

// Truthy Value 
// abcdefghi 
// 012345 

// all are truthy value except above falsy values