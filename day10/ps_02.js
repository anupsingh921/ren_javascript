
//Q1
const prompt = require("prompt-sync")( );
let age = prompt("What is your age? ")

age = Number.parseInt(age)
if (age > 10 && age < 20) {
  console.log("Your age is between 10 and 20")
}
else {
  console.log("Your age is not between 10 and 20")
}

//Q2
const prompt = require("prompt-sync")( );
let grade = prompt("Mention your grade from A-D ?  ")
switch (grade) {
  case 'A':
    console.log("Your grade is A")
    break
  case 'B':
    console.log("Your grade is B")
    break
  case 'C':
    console.log("Your grade is C")
    break
  case 'D':
    console.log("Your grade is D")
    break
    
  
  default:
    console.log("Invalid Grade Input")
}

//Q3
const prompt = require("prompt-sync")( );
let n = prompt("Input a Number : ")
n = Number.parseInt(n)
if (n % 2 == 0 && n % 3 == 0) {
  console.log("Given number is divisible by 2 and 3")
}
else {
  console.log("Given number is not divisible by 2 and 3")
}

//Q4
const prompt = require("prompt-sync")();
let n = prompt("Input a Number : ");
n = Number.parseInt(n);
if (n % 2 == 0 || n % 3 == 0) {
  console.log("Given number is divisible by either 2 or 3");
} else {
  console.log("Given number is neither divisible by 2 nor 3");
}


//Q5
const prompt = require("prompt-sync")( );
let age = prompt("Please tell your age? ")

age = Number.parseInt(age)
let result= age>18 ? "Yes..You can drive" : "No..You cannot drive"
console.log(result)