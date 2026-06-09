// 3. Function Overloading (by type of arguments)
// Write a function calculate(x, y) that:
// •	If both arguments are numbers, return their sum.
// •	If both are strings, return their concatenation.

const calculate = function(x,y){
    if (typeof(arguments[0]) == "number" &&  typeof(arguments[1]) == "number") {
        return x + y 
    }
    else if (typeof(arguments[0]) == "string" &&  typeof(arguments[1]) == "string") {
        return x + y 
    }
    else{
        return `Both the inputs are of different data types`
    }
}
console.log(calculate(2,"5"))