// // 🥈 Program 2 – Employee Management (Must Do)
// // Concepts Covered
// // Inheritance
// // super()
// // Constructor chaining
// // Method Overriding
// // Polymorphism

// Structure
// Employee

// ↓

// Manager

// ↓

// Developer

// ↓


// Methods

// calculateSalary()

// display()

// Store them in

// const employees = [
//     new Manager(...),
//     new Developer(...),
// ];

// Loop

// employees.forEach(emp=>{
//     emp.calculateSalary();
// });

class Employee{
    constructor(name , empId){
        this.name = name ; 
        this.id = empId ; 
    }
} 

class Manager extends Employee{
    constructor(name , empId , dept) {
        super(name , empId) ; 
        this.dept = dept 
    }
    calculateSalary(){
        this.salary = 80000 ; 
        return this.salary
    }
    display(){
        console.log(`Name : ${this.name} ID:${this.id} Salary : ${this.salary} Dept:${this.dept}`);
        
    }
}

class Developer extends Employee{
    constructor(name,empId , exp){
        super(name , empId) ; 
        this.exp = exp 
    }
    calculateSalary(){
        this.salary = 50000 ; 
        return this.salary 
    }
    display(){
        console.log(`Name : ${this.name} ID:${this.id} Salary : ${this.salary}`);
        
    }
}

let dev = new Developer('Tharnish' , 57 , 10) ; 
let manager = new Manager('Naveen' , 35 , 5) 

let arr = [dev , manager] 

arr.forEach(obj=> {
     obj.calculateSalary() 
     obj.display()
    } )