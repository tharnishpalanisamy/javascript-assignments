// 1.	Check Even or Odd:
// Write a program to check if a given number is even or odd using an if-else condition.


function oddOrEven(n) {
    if (n%2 == 0) {
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}   
let n = parseInt(prompt("Enter a Number"))

oddOrEven(23)