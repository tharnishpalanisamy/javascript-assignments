// 7.	Find Maximum and Minimum in Array:
// Write a program to find the maximum and minimum values from a given array using switch case

let n = parseInt(prompt("enter the no of elements")) 
let array = [] 
for (let i = 0 ; i < n ; i++) {
    array[i] = parseInt(prompt("Enter the Element " + (i+1) )) 
    // array.push(num)
}
let min = array[0];
let max = array[0];  

for (let i = 0 ; i < array.length ; i++) {
    if (array[i] > max) {
        max = array[i]
    }
    if (array[i] < min ) {
        min = array[i]
    }
}


console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
