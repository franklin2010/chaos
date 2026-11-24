const prompt = require("prompt-sync")();
let userChoice = 1;
let total = 1;
let sum = 0;
while (userChoice != -1) {
let inserted = Number(prompt("Enter a new integer: "));
sum += inserted;
let average = sum/total;
console.log("The running average is "+ average);
userChoice = prompt("Do you wish to continue ( Enter -1 to stop ): ");
total += 1;
}
