// 5. Function with Rest Operator (...args)
// Write a function findMax(...numbers) that accepts any number of arguments and returns the largest one.

function findMax(...nums) {
    let max = nums[0] 
    // for(let i = 0 ; i < nums.length ; i++) {
    //     if(nums[i] >= max) {
    //         max = nums[i]
    //     }
    // }
    // return max 

    nums.forEach(n => {
        if (n > max) max = n 
    })
    return max
}

console.log(findMax(10,20,60,500,4005,4,506,5,800000))