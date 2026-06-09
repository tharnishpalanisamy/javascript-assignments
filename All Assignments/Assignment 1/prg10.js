// 10.	Find Sum of Even Numbers in Array:
// Write a program to calculate the sum of all even numbers present in an array.

let n = parseInt(prompt("enter the no of elements")) 

let array = [] 

for (let i = 1 ; i <= n ; i++) {
    let num = parseInt(prompt("Enter the Element " + i )) 
    array.push(num)
}

let res = 0 ; 

for (let i = 0 ; i < array.length ; i ++) {
    if (array[i] % 2 == 0 ) {
    res += array[i]
}
}
console.log("The array is : " + array)
console.log("the sum of even numbers in the Array is : " + res )