// 12.	Find the third maximum of a number in an array

let n = parseInt(prompt("Enter the no of elements")) 
let array = [] 

for (let i = 1 ; i <= n ; i ++ ) {
    num = parseInt(prompt("Enter the element " + i)) 
    array.push(num)
}

let first = 0
let second = 0 
let third =  0 
//  4    7    6     5     4     3 

// 0 , 0 , 0 
// 0 , 0, 4 
// 0 , 4 , 7 
// 4 , 6, 7 

for(let i = 0 ; i < array.length ; i ++) {
    val = array[i] 
    if(val > first) {
        third = second 
        second = first 
        first = val
    }
    else if (val > second) {
        third = second 
        second = val
    }
    else if ( val > third ) {
        third = val 
    }
}

console.log("The Array is :") 
console.log(array) 
console.log("The third Largest Element is : " + third   )
