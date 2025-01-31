// suppose we need a long string and some data is call from the varibales 
// for example we want "Hello World? How are you? What skills do you practice right now?" 
// and some of the words are initiliaze in the variable 

let how = "How are";

let what = "skills do you practice";

// one way is we do with the help of traditional way which is very tidious 

let about = "Hello World? " + how + " " + "you? What" + " " + what + " " + "right now?";
console.log(about);

// another way is 

console.log("Hello World? " + how + " " + "you? What" + " " + what + " " + "right now?");

// Template string way 
// but look its very tidious way to do this instead of this we can make template with the help of backticks ``

let aboutUs = `Hello World? ${how} you? what ${what} right now?` 
console.log(aboutUs);
