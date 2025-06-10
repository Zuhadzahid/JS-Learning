// and "&&" or "||" operator it is used for verifiying the condiitons

// suppose we have a two variables 

let firstName = "zuhad";
let myAge = 25;

// This is the typical way i can check both of the values 

if (firstName[0] === "z"){
    console.log("Your Name start with z");
}
if (myAge >=25){
    console.log("You are eleigibl");
}

// now we can use for and operator for checking or verifying 
// in using and operator which is && both of the condition must be true otherwise it returns else value 

if (firstName[0] === "z" && myAge === 26){
    console.log("Yes it is correct information")
}else{
    console.log("No it is not correct information")
    
}

// Similarly in using or operator which is || one of the condsition must be true out of both otherwise elsewill be run

if (firstName[0] === "z" || myAge >= 30){
    console.log("Yes Man you are eligible")
}else{
    console.log("No man sorry your are not eligible");
    
}