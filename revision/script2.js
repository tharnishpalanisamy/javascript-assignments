class Employee{
    constructor(name , age , salary){
        this.name= name ; 
        this.age = age ; 
        this.salary = salary 
    }
    display(){
        console.log(`${this.name}  ${this.age} ${this.salary}`);
        
    }
}

class Manager extends Employee{
    constructor(name , age , salary , dept){
        super(name , age , salary) 
        this.dept = dept 
    }
    display(){
        super.display() 
        console.log(`Managing ${this.dept} Department`);
    }
}


let m = new Manager('Tharnish' , 20 , 250000 , 'It') 
m.display()