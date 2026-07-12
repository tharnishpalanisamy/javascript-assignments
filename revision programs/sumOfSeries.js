const prompt = require("prompt-sync")();

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

let x = Number(prompt("Enter X: "));
let n = Number(prompt("Enter Number of Terms: "));

let sum = 0;

for (let i = 1; i <= n; i++) {
    let term = Math.pow(x, i) / factorial(i - 1);

    if (i % 2 === 0)
        sum -= term;
    else
        sum += term;
}

console.log("Sum =", sum);