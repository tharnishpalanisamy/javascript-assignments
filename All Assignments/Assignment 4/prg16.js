// 15.	Create a class Calculator with an add() and divide() methods.  add() that behaves differently if called with 2, 3, or 4 arguments. Divide() method divides when both inputs are non-zero values. If the second value = 0, throw the error. If more than 2 inputs are passed, error message should be raised to indicate too many inputs to process the data.

class Calcluator{
    constructor(){

    }
    add(n1,n2,n3=0,n4=0){
        return n1 + n2 + n3 + n4
    }
    divide(){
        if (arguments.length > 2 ) {
            return `You have Enetered More than 2 Numbers`
        } 
        if (arguments[1] == 0 ) {
            throw new Error("Cannot Divide a Number with Zero")
        } 
        else{
            return arguments[0] / arguments[1] 
        }
    }
}

myCaculator = new Calcluator() 
console.log(myCaculator.add(6,4,4)) 
console.log(myCaculator.divide(66,30,10))