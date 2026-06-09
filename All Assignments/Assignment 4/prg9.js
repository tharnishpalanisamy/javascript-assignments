// 9.	Demonstrate method overriding: Create a base class Shape with area() method, then override it in Circle and Rectangle classes.

class Shape{
    area(){
        return `Area is Undefined`
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius = radius
    }
    area(){
        console.log((3.14)*this.radius*this.radius)
    }
}

class Rectangle extends Shape{
    constructor(length,breadth) {
        super()
        this.length = length 
        this.breadth = breadth 
    }
    area(){
        console.log(this.length*this.breadth)
    }
}

const circle1 = new Circle(5) 
circle1.area() 
const rectangle1 = new Rectangle(5,8) 
rectangle1.area()