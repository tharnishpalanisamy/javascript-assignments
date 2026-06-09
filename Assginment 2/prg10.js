// 10. Combining Rest + Arrow Function
// Write an arrow function sumAll = (...nums) => {} that adds all the numbers passed to it.
// Call it with sumAll(10,20,30,40,50,60,70) and print the result.


const sumAll = (...nums) => {
    let res = 0 
    nums.forEach(n => {
        res += n
    })
    return res
}

console.log(sumAll(10,20,30,40,50,60,70))


const nums = [1,2,3,45,5] 

let res = nums.reduce((a,b) => a+b , 0) 

console.log(res)