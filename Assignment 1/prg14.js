//14.	Program code to demonstrate destructuring, spread operator and string interpolation

//swapping values of 2 variables using array destructuring 

let a = 10 
let b = 20 ;

[a,b] =[b,a] 

console.log(a) 

//swapping elements in a array 

let array = [1,2,3,4,5] ;

[array[0] , array[4]] = [array[4] , array[0]]
console.log(array)

const h = [1,2,3] 
console.log(...h);

// using ...rest 

let colors = ["red" , 'blue' , 'green' , 'black' , 'white' ] ; 

[red , blue , green , ...remainingColors] = colors ;

console.log(remainingColors)


// Object destructuring 

let person1 = {
    firstName : "Tharnish" , lastName: "Palanisamy" , age : 20 
}

let person2 = {
    firstName : "Prajin" , lastName: "Sai" , age : 20 , job : "SDE"
}

// let {firstName,lastName} = person1 ;  
// console.log(firstName , lastName)

// //accesing 
// console.log(person1.firstName) 
// console.log(person1["lastName"])


//assgining default values in destructuring 

let {firstName , lastName , age , job = "umemployed"} = person2 ; 

console.log(job) 

// let {f , l , y , j = "Unemployed" } = person2 ;  

// console.log(j)


// destructuring in function parameter 

let person1 = {
    firstName : "Tharnish" , lastName: "Palanisamy" , age : 20 
}
function display({firstName,lastName,age , job = "Unemployed"}) {
    console.log("details")
    console.log(`Name : ${firstName} ${lastName} age : ${age} ${job}`)
}

display(person1)
