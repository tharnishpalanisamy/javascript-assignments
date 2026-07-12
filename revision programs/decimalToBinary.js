const prompt = require("prompt-sync")();

console.log("1. Decimal to Binary");
console.log("2. Binary to Decimal");

let choice = Number(prompt("Enter your choice: "));

switch (choice) {

    case 1:
        let decimal = Number(prompt("Enter Decimal Number: "));
        let binary = "";

        if (decimal === 0) {
            binary = "0";
        } else {
            while (decimal > 0) {
                binary = (decimal % 2) + binary;
                decimal = Math.floor(decimal / 2);
            }
        }

        console.log("Binary =", binary);
        break;

    case 2:
        let binaryNum = prompt("Enter Binary Number: ");
        let decimalValue = 0;
        let power = 0;

        for (let i = binaryNum.length - 1; i >= 0; i--) {
            decimalValue += Number(binaryNum[i]) * (2 ** power);
            power++;
        }

        console.log("Decimal =", decimalValue);
        break;

    default:
        console.log("Invalid Choice");
}