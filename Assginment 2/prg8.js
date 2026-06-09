// 8. Recursion Example
// Write a function naturalSum() that returns the sum of natural numbers from 1 to given number.


function naturalSum(num){
    if (num == 1) return 1 
    return num + naturalSum(num-1)
}

console.log(naturalSum(5))  