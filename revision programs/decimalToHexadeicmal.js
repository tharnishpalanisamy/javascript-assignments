const prompt = require("prompt-sync")();

console.log("1. Decimal to Hexadecimal");
console.log("2. Hexadecimal to Decimal");

let choice = Number(prompt("Enter your choice: "));

switch (choice) {
    case 1:
        let decimal = Number(prompt("Enter Decimal Number: "));
        console.log("Hexadecimal =", decimal.toString(16).toUpperCase());
        break;

    case 2:
        let hex = prompt("Enter Hexadecimal Number: ");
        console.log("Decimal =", parseInt(hex, 16));
        break;

    default:
        console.log("Invalid Choice");
}