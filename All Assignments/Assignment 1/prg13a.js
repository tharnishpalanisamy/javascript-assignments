// 13.	Write at least 2 program codes each to demonstrate all the looping statements. (while, do… while, for, for … of and for …. in   )

//Factorial 
let n = parseInt(prompt("enter the Numeber : "))

console.log("Factorial using for Loop") 
let res = 1 

for(let i = 2 ; i <= n ; i ++ ) {
    res *= i 
}

console.log("THe factorial of "+ n + " Using for loop " + res )


//while loop 

console.log("While Loop") 

let i = 2 ; 
res = 1
while (i <= n ) {
    res *= i 
    i ++
}
console.log("THe factorial of "+ n + " Using While Loop " + res )

//do while loop 

console.log("Do-while Loop") 

res = 1 
i = 1 

do{
    res *= i
    i ++
}
while(i <= n) 

console.log("THe factorial of "+ n + " Using Do-While loop " + res )


//for -- in 

let arr = [] 

for (let i = 1 ; i <= n ; i ++) {
    arr.push(i)
}
res = 1
for (let i in arr) {
    res *= arr[i]
} 
console.log("Factorial using for - in " + res ) 

//for of
res = 1 

for (let i of arr) {
    res *= i 
}

console.log("Factorial using for - of " + res ) 
