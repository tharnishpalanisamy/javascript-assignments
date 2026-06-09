// 6.	Count Positive, Negative, and Zero Elements in Array:
// Write a program to count how many numbers in an array are positive, negative, and zero.


let n = parseInt(prompt("enter the no of elements")) 
let array = [] 
for (let i = 1 ; i <= n ; i++) {
    let num = parseInt(prompt("Enter the Element " + i )) 
    array.push(num)
}
let numCount = 0 
let zeroCount = 0 
let negCount = 0 

for (let i = 0 ; i < array.length ; i ++) {
    if (array[i] == 0 ){
        zeroCount ++
    }
    else{
    numCount += array[i] > 0 ? 1 : 0 
    negCount += array[i] < 0 ? 1 : 0

}
}
console.log("Number of positive numbers : " + numCount)
console.log("Number of Zeros  : " + zeroCount)
console.log("Number of Negative numbers : " + negCount)