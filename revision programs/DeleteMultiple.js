const prompt = require("prompt-sync")();

let n = Number(prompt("Enter size of array: "));
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(Number(prompt(`Enter element ${i + 1}: `)));
}

let count = Number(prompt("How many elements do you want to delete? "));

let positions = [];

for (let i = 0; i < count; i++) {
    positions.push(Number(prompt(`Enter position ${i + 1}: `)));
}

// Sort positions in descending order
positions.sort((a, b) => b - a);

for (let pos of positions) {
    if (pos >= 1 && pos <= arr.length) {
        arr.splice(pos - 1, 1);
    }
}

console.log("Array after deletion:");
console.log(arr);