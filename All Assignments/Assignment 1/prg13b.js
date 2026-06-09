// // 13.	Write at least 2 program codes each to demonstrate all the looping statements. (while, do… while, for, for … of and for …. in   )

// fibonacci 

n = parseInt(prompt("Enter a Number ")) 

//for Loop
let arr = [] 
let a = 0
let b = 1
let next = 0 
console.log("The Fibonacci Values till " + n + "th term using For Loop: " )
for (let i = 0 ; i <= n ; i ++) {
    console.log(a)
    arr.push(a)
    next = a + b 
    a = b 
    b = next 
}

//while loop 

a = 0 
b = 1 
next =  0 
let i = 0 
console.log("The Fibonacci Values till " + n + "th term  using while loop: " )
while ( i <= n  ) {
    console.log(a)
    next = a + b 
    a = b 
    b = next 
    i++
}

//do-while 

a = 0 
b = 1 
next = 0 
i = 0 
console.log("The Fibonacci Values till " + n + "th term  using do-while loop: " )
do{
    console.log(a) 
    next = a+b 
    a = b 
    b = next 
    i ++
}
while(i <= n ) 

//for in loop 
console.log("using for in loop")
for(let i in arr) {
    console.log(arr[i])
}


// for of loop 
console.log("using for of loop")
for (let i of arr) {
    console.log(i)
}