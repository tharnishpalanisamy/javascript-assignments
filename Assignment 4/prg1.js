// 1.	Create an object using object literal to store details of a car (brand, model, year).
// \ Add a method to display car details.


const car ={
    brand:"" ,
    model : "" , 
    year:0  , 
    displayCar:function() {
    return `Car : ${this.brand} ${this.model}  year:${this.year}`
}

}
car.brand = "BMW" 
car.model = "M4" 
car.year = 2024

console.log(car.displayCar())