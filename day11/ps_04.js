//Q1

let string = "har\""
console.log(string.length)

//Q2
const line = 'The bravest are the ones who simply keep doing their work without any bad intention';

const word = 'intention';
console.log(line.includes(word))
console.log(`The word "${word}" ${line.includes(word) ? 'is present' : 'is not present'} in the above line..\n`);

const initial= 'The';
console.log(line.startsWith(initial));
console.log(`The line ${line.startsWith(initial) ? 'starts with' : 'does not starts with'} "${initial}" in the above line..\n`);

const last= 'work';
console.log(line.endsWith(last));
console.log(`The line ${line.endsWith(last) ? 'starts with' : 'does not starts with'} "${last}" in the above line..`);

//Q3

const prompt = require("prompt-sync")( );
let string1=prompt("Enter the input string: ");
console.log(string1.toLowerCase())
console.log(string1.toUpperCase())
console.log("\n")


// Q4
let str3 = "Please give Rs 1000"
let amount = Number.parseInt(str3.slice(15))
console.log(amount)
console.log("\n")


//Q5
let str4 = "Arjuna"
str4[3] = "S"
console.log(str4) 
//str4 remains unchanged as strings are immutable although altering const variable doesn't throw any error...