const prompt = require("prompt-sync")( );
let marks = {
  Anup: 90,
  Aman: 80,
  Akash: 56,
  Ajay: 72,
  Karan: 64
}

//Q1
for (let i = 0; i < Object.keys(marks).length; i++) {
   console.log("The marks of " + Object.keys(marks)[i] + " : "  + marks[Object.keys(marks)[i]])
}

//Q2
console.log("\nUsing for in loop")
for (let key in marks) {
  console.log("The marks of " + key + " : " + marks[key])
}


//Q3
const prompt = require("prompt-sync")( )
let correctnumber = 77
let i

 while(i != correctnumber) {
  console.log("Try again..")
  i = prompt("Enter a number: ")
}
console.log("Great...You have entered the correct number ..")

//Q4
const prompt = require("prompt-sync")( )
let a= Number.parseInt(prompt("Enter the first number: "))
let b= Number.parseInt(prompt("Enter the second number: "))
let c= Number.parseInt(prompt("Enter the third number: "))
let d= Number.parseInt(prompt("Enter the fourth number: "))
let e= Number.parseInt(prompt("Enter the fifth number: "))

const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5
}

console.log(mean(a, b, c, d, e))