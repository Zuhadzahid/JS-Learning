// So basically we will use switch statement 
// In switch statement there is a case and break works 

let day = 8;

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Day");
        break;
}

// If we dont use the break if after any case then the code will execute till the end so for stoping the execution we must put the break 