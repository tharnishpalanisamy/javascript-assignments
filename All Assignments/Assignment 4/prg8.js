// 8.	Create a base class Employee with id, name and date of join. Derive a class Manager that adds department. Display details using inheritance.

class Employee{
    constructor(id,name,doj){
        this.id = id 
        this.name = name 
        this.doj = doj 
    }
    display(){
        console.log(`Id:${this.id}\nname:${this.name}\nDate of Joining:${this.doj}`) 
    }
}

class Manager extends Employee {
    constructor(id,name,doj,department){ 
        super(id,name,doj) 
        this.dept = department 

    }
    display(){
        super.display() 
        console.log(`Department:${this.dept}`)
    }
}

const manager = new Manager(5,"Tharnish","2026-03-16","Software")
manager.display()