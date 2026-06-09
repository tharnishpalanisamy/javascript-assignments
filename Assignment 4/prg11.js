// 11.	Create an abstract class Vehicle with a method startEngine(). Throw an error if someone tries to instantiate Vehicle directly.

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


const vehicle1 = new Vehicle() 
vehicle1.startEngine()

//pure baseclass