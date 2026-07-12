const prompt = require("prompt-sync")();

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

let n = Number(prompt("Enter N: "));
let r = Number(prompt("Enter R: "));

let ncr = factorial(n) / (factorial(r) * factorial(n - r));

console.log("NCR =", ncr);