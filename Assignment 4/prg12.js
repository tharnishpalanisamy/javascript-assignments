// 12.	Extend the Vehicle class into Car and Bike classes, each implementing its own startEngine() method.

class Vehicle{
    constructor(){
        if(this.constructor == Vehicle) {
            throw new Error("The vehicle Class is not Allowed to Access Directly")
        }
    }
    startEngine(){
        throw new Error("This method is also not allowed to access Directly")
    }
}

class Car extends Vehicle{
    constructor(){
        super()
    }
    startEngine(){
        console.log(`The Car is started`)
    }
}

class Bike extends Vehicle{
    constructor(){
        super()
    }
    startEngine(){
        console.log(`The Bike is Started`)
    }
}
    
const car1 = new Car()
car1.startEngine()

const bike1 = new Bike() 
bike1.startEngine()