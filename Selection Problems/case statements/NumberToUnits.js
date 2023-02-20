//Que 3: Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require("prompt-sync")();

let number=prompt("Enter a Single Digit Number : ")

switch (number) {
    case "1":
        console.log(number +" is at Unit place")
        break;
    case "10":
        console.log(number + " is at Ten's place")
        break;
    case "100":
        console.log(number+ " is at Hundred's place")
        break;
    case "1000":
        console.log(number + "is at Thousand's place")
        break;
    default:
        console.log("Invalid Input")
        break;
}