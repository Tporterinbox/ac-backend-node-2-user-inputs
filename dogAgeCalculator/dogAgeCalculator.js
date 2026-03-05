/* 

Your task: Make a dog age calculator with Node.js!

Follow the instructions in the README.md file in this repo.

Run this file with the node command:
node dogAgeCalculator.js

*/

// -------------------------------------------

// process.argv stores the command line inputs.
// process.argv[2] → dog name
// process.argv[3] → dog age
// Number() converts the age from text to a number.

// process.argv
// 0 → node path = (node)
// 1 → file name = (dogAgeCalculator.js )
// 2 → first input = (Dog name)
// 3 → second input = (Dog Age in human yearss)

// to get values from command line---
const dogName = process.argv[2];
const humanAge = Number(process.argv[3]);

let dogAge;

if (humanAge ===1) {
dogAge = 15;
} else if (humanAge === 2 ){
    dogAge = 24;
} else {
 dogAge = 24 + (humanAge - 2) * 5;
}

console.log(`Your dog, ${dogName}, is ${humanAge} years old, but that's ${dogAge} years old in dog years!`);

