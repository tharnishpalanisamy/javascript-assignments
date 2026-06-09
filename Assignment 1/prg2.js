// 2.	Largest of Three Numbers:
// Write a program to find the largest number among three given numbers using if-else conditions and ternary operator.


function largestNum(num1,num2,num3){
    let res = 0 ; 
    res = num1>num2?num1>num3?num1 : num3 : num2 > num3? num2 : num3
    console.log("The Largest Number is : " + res)
}
let n1 = parseInt(prompt("Enter Number 1 "))
let n2 = parseInt(prompt("Enter Number 2 "))
let n3 = parseInt(prompt("Enter Number 3 "))
largestNum(n1,n2,n3)

