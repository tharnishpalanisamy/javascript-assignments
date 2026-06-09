// 3.	Sum of First N Natural Numbers:
// Write a program to calculate the sum of the first N natural numbers using a for loop.


let num = parseInt(prompt("enter"))   

let res = 0 

for(let i = 1 ; i <= num ; i ++) {
    res += i 
}
console.log(res)