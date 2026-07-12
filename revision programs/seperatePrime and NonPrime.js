const prompt = require("prompt-sync")();

let n = Number(prompt("Enter size of array: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(Number(prompt(`Enter element ${i + 1}: `)));
}

let prime = [];
let nonPrime = [];

for (let num of arr) {
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime)
        prime.push(num);
    else
        nonPrime.push(num);
}

console.log("Prime Numbers:", prime);
console.log("Non-Prime Numbers:", nonPrime);