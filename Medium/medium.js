//  Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. 
//For example: if the user enters the number 3, then it should return the month “March.” 
//Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
var myArray= ["null", "January","February","March", "April","May","June","July","August","Septemebr","October","November","December"];

var cal = prompt("Enter a number between 1-12");


if (cal < 1) {
    console.log("Invalid Input"); 
}

else if (cal > 12 ) { 
    console.log("Invalid Input" );
}

else{
    console.log(`${myArray[cal]}`);
}