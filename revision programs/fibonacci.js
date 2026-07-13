const prompt = require("prompt-sync")();

let n = Number(prompt("Enter number of terms: "));

let a = 0, b = 1;

for (let i = 1; i <= n; i++) {
    process.stdout.write(a + " ");

    let c = a + b;
    a = b;
    b = c;
}