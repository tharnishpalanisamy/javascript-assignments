const prompt = require("prompt-sync")();

let n = Number(prompt("Enter size of array: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(Number(prompt(`Enter element ${i + 1}: `)));
}

let element = Number(prompt("Enter element to insert: "));
let position = Number(prompt("Enter position (1-based): "));

arr.splice(position - 1, 0, element);

console.log("Array after insertion:");
console.log(arr);