class Person{
    constructor(name,age,gender,location){
        this.name= name 
        this.age = age 
        this.gender = gender 
        this.location = location 
    }
    display(){
        console.log(`Name:${this.name}\nAge:${this.age}\nGender:${this.gender}\nLocation:${this.location}`)
    }

}

class Employee extends Person{
    constructor(name,age,gender,location,role,salary,experience,shift){
        super(name,age,gender,location) 
        this.role = role 
        this.salary = salary 
        this.experience = experience 
        this.shift = shift 
    }
    display(){
        super.display()
        console.log(`Role:${this.role}\nSalary:${this.salary}\nExperience:${this.experience} Years\nShift:${this.shift}`) 

    }
}

class Manager extends Employee{
    constructor(name,age,gender,location,role,salary,experience,shift,department){
        super(name,age,gender,location,role,salary,experience,shift) 
        this.dept = department
    }
    display(){
        super.display()
        console.log(`Department:${this.dept}`) 
    }
}

const manager1 = new Manager("Steve",42,"Male","Cbe","Tech Lead",250000,15,"Morning","Software")
manager1.display()