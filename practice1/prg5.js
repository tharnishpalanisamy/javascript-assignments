// 8.	Create a base class Employee with id, name and date of join.
//  Derive a class Manager that adds department. Display details using inheritance.

class Employee{
    constructor(id,name){
        this.id = id ; 
        this.name = name ; 
    }
    display(){
        return `${this.id} ${this.name}`
    }
}

class Manager extends Employee{
    constructor(id , name , dept){
        super(id , name ) ; 
        this.dept = dept ; 
    }
    display(){
        super.display() ; 
        return `${this.dept}`
    }
}


let tharnish = new Manager(1,'tharnish' , 'trainee') 
console.log(tharnish.display());
