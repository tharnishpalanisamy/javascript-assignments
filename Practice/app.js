console.log("hello World")

// function add(a,b){
//     return a+b
// }

// const add = function(a,b){
//     return a+b
// }

// const add = (a,b) => a+b ;

// const add = a => a*a

// const add = (a,b) => {
//     return a+b
// }
// console.log(add(10,20))

//hoisting

// console.log(add(10,30))
// function add(a,b) {
//     return a +b 
// }

//call Back Function


// function greet(name) {
//     return `Welcome ${name}`
// }

// function processName(name , callback) {
//     let userName = name 
//     return callback(userName)
// }

// console.log(processName("Tharnish" , greet))


//call() 

// const person1 = {name:"Tharnish" , role:"Trainee"}
// const person2 = {name:"Naveen" , role :"Program Manager"}

// function greet(age , gender){
//     return `Welcome ${this.name} ${this.role} ${age} ${gender}`
// }

// console.log(greet.call(person1 , 20 , "Male"))

// console.log(greet.call(person2 , 20 , "Male"))

//apply() method 


// function greet(age , gender){
//     return `Name : ${this.name} ${age} ${gender}`
// }

// const person1 = {name:"Tharnish" , role:"Trainee"}

// console.log(greet.apply(person1 , [20 , "Male"]))


//bind() 
// function greet(role){
//     return `Welcome ${this.name} ${role}`
// }
// const person1 = {name:"Tharnish" , role:"Trainee"}

// const bindedFunction = greet.bind(person1,"swet")

// console.log(bindedFunction())


//syntax of all
// functionName.call(thisArg, arg1, arg2, ...restArg)

// functionName.apply(thisArg, [arg1, arg2,...restArg])

// const newFunction = functionName.bind(thisArg, arg1, arg2,...restArg)

//regex pattern for dates 
//dd/mm/yyyy

// const pattern  = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/

// //mm/dd/yyyy 
// const pattern2 = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/

// //yyyy/mm/dd 
// const pattern3 = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/

// const input = "022/04/2008"
// console.log(input.match(pattern2))
// console.log(pattern2.test(input))

//validate date

function validateDate(date){
    let format;

    if(/^(0[1-9]|[12][0-9]|3[01])[-\/.](0[1-9]|1[0-2])[-\/.]\d{4}$/.test(date)){
        format = "dd/mm/yyyy";
    }
    else if(/^(0[1-9]|1[0-2])[-\/.](0[1-9]|[12][0-9]|3[01])[-\/.]\d{4}$/.test(date)){
        format = "mm/dd/yyyy";
    }
    else if(/^\d{4}[-\/.](0[1-9]|1[0-2])[-\/.](0[1-9]|[12][0-9]|3[01])$/.test(date)) {
        format = "yyyy/mm/dd";
    }
    else{
        format = "Invalid Format";
    }
    return `Entered: ${date} | Result: ${format}`
}
console.log(validateDate("13-05-4044")) 





// Only lowercase letters.

let regex = /^[\w]+$/
console.log(regex.test('hifhfhf'));


// Exactly 6 digits.

regex = /^[\d]{6}$/ 
console.log(regex.test('123643'));


// Username: letters and numbers only, length 5–12.

regex = /^[\w]{5,12}$/

// Starts with A and ends with Z.
regex = /^A.*Z$/

// Indian mobile number: exactly 10 digits, first digit must be 6, 7, 8, or 9.
regex = /^[6789][\d]{9}$/