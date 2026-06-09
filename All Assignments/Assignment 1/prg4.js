// 4.	Factorial of a Number:
// Write a program to find the factorial of a given number using a loop.

let num = parseInt(prompt("Enter a number : ")) 

let res = 1 ; 
for (let i = num ; i >= 1 ; i --) {
    res *= i
}
console.log("the Factorial of num is " + res)