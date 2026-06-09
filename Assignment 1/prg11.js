// 11.	Save the odd and even numbers in separate arrays and print neatly
// Write a program to save all the odd and even numbers in a separate array and print the elements separately with the counts


let n = parseInt(prompt("Enter the no of elements")) 
let array = [] 
for (let i = 1 ; i <= n ; i ++) {
    num = parseInt(prompt("Enter the element " + i )) 
    array.push(num)
}

console.log("The array is : " + array ) 

let even = [] 
let odd = [] 
let evenCount = 0 
let oddCount = 0 

for (let i = 0 ; i < array.length ; i++) {
    if (array[i] % 2 == 0 ) {
        even.push(array[i])
        evenCount ++
    }
    else{
        odd.push(array[i])
        oddCount ++ 
    }
}+

console.log("The number of even numbers are :" + evenCount) 
console.log("The Array of even numbers is : "  ) 
console.log(even) 
console.log("The number of Odd numbers are :" + oddCount) 
console.log("The Array of odd numbers is : "  ) 
console.log(odd) 