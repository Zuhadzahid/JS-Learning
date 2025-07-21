// if
// else if 
// else 

// So for below this is else if condition JS check and execute lines whenever untill it satisfied the conditions

let tempInDegree = 5;

if (tempInDegree <= 0) {
    console.log("Extemely Cold Outside");
}else if (tempInDegree <= 10){
    console.log("MidRange Cold Outside");
}else if (tempInDegree <= 20){
    console.log("Somewhat Cold Outside");
}else if (tempInDegree <= 30){
    console.log("MidRange Hot Outside");
}else if (tempInDegree <= 40){
    console.log("High Hot Outside");
}else {
    console.log("Extremely Hot Outside");
}

// This code works fine and satisfied else if conditions 

// now another code is for pizza price tracker 

let pizzaPriceSize = 2;

if (pizzaPriceSize < 10) {
    console.log("Pizza size is 4 Inches");
}else if (pizzaPriceSize < 20){
    console.log("Pizza size is 8 Inches");
}else if (pizzaPriceSize < 30){
    console.log("Pizza size is 12 Inches");
}else if (pizzaPriceSize < 40){
    console.log("Pizza size is 16 Inches");
}else if (pizzaPriceSize < 50){
    console.log("Pizza size is 20 Inches");
}else {
    console.log("Pizza size is 24 Inches");
}