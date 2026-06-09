// 8.	Check Prime Number:
// Write a program to check whether a given number is a prime number or not.


let num = parseInt(prompt('Enter a Number :')) 
let isPrime = true ; 
if (num > 1 && num <=2) {
    console.log(num + " is Prime")
}
for (let i = 2 ; i <= Math.sqrt(num) + 1 ; i ++) {
    if (num % i == 0 ) {
        console.log(num + " is Not A Prime Number")
        isPrime = false 
    }
}
if (isPrime) {
    console.log(num +" is a Prime Number")
}