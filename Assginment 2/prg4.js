// 4. Function with Object as Parameter
// Write a function printStudent(student) where student is an object with name, age, total, result and grade.
// The function should print the details in a formatted way.

function printStudent({name , age , total , result , grade}){
    return `Name : ${name}
Age : ${age}
Total : ${total} 
Result : ${result} 
Grade : ${grade} `
}

const student = {name:"Tharnish" , age:20 , total : 492 , result : "Pass" , grade:"A"} 

console.log(printStudent(student))