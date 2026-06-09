// 9.	Print Multiplication Table:
// Write a program to print the multiplication table of a given number using a for loop.


let n = parseInt(prompt("Enter a Number : ")) 
let limit = parseInt(prompt("Enter the count till you want the Table"))
for (let i = 1 ; i <= limit ; i ++) {
    console.log(n + " X " + i +" = "+ (n * i ) )
}

