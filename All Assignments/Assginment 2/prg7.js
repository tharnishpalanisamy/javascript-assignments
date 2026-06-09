// 7. Function Expression
// Write a function expression assigned to a variable isPrime that checks whether a number is prime or not prime.

const isPrime = function(num) {
    let isPrime = true
    if(num == 2) {
        return isPrime
    }
    else{
        for(let i = 2 ; i <= Math.sqrt(num)  ; i ++){
            if(num % i == 0){
                isPrime = false 
                break ; 
            }
        }
    }
    return isPrime
}

console.log("Prime Number Checker") 
console.log(isPrime(102))