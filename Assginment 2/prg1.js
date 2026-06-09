// 1. Ordinary Function
//  Write a function findLargest(num1, num2, num3) that takes 3 number and returns the largest value. Use ternary operator to find the result largest among 3 numbers.


function findLargest(num1,num2,num3){
    return (num1 > num2) ? ((num1 > num3) ? num1 : num3) : (num2>num3) ? num2 : num3
}

console.log(findLargest(100,2000,400))