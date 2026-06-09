// 5.	Reverse an Array:
// Write a program to reverse the elements of an array without using the built-in reverse() method.


let n = parseInt(prompt("enter the no of elements")) 
let array = [] 
for (let i = 1 ; i <= n ; i++) {
    let num = parseInt(prompt("Enter the Element " + i )) 
    array.push(num)
}

let res = [] 
for (let i = array.length - 1 ; i >= 0 ; i--) {
    res.push(array[i])
}
console.log(res)