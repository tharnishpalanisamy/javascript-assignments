const prompt = require("prompt-sync")();

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

console.log("1. Sine Series");
console.log("2. Cosine Series");

let choice = Number(prompt("Enter your choice: "));
let x = Number(prompt("Enter angle in degrees: "));
let n = Number(prompt("Enter number of terms: "));

x = x * Math.PI / 180; // Convert to radians

let sum = 0;

switch (choice) {

    case 1:
        // sin(x) = x - x^3/3! + x^5/5! - ...
        for (let i = 0; i < n; i++) {
            let term = Math.pow(x, 2 * i + 1) / factorial(2 * i + 1);

            if (i % 2 === 0)
                sum += term;
            else
                sum -= term;
        }

        console.log("Sin Series Sum =", sum);
        break;

    case 2:
        // cos(x) = 1 - x^2/2! + x^4/4! - ...
        for (let i = 0; i < n; i++) {
            let term = Math.pow(x, 2 * i) / factorial(2 * i);

            if (i % 2 === 0)
                sum += term;
            else
                sum -= term;
        }

        console.log("Cos Series Sum =", sum);
        break;

    default:
        console.log("Invalid Choice");
}