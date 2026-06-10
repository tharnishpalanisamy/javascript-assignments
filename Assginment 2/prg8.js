// 8. Recursion Example
// Write a function naturalSum() that returns the sum of natural numbers from 1 to given number.


function naturalSum(n) {
    if (n == 1 ){
        return 1 ; 
    }
    return n + naturalSum(n-1) 
}

console.log(naturalSum(5));

