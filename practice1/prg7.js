// 10.	Show an example of multi-level inheritance: Person → Employee → Manager.

class Person{
    constructor(name){
        this.name = name ; 
    }
    display(){
        return `${this.name}`
    }
}

class Employee extends Person{
    constructor(name , id) {
        super(name) ; 
        this.id = id ; 
    }
    display(){
        this.temp = super.display()
        return `${this.id}  ${this.temp}  `
    }
}

class Manager extends Employee{
    constructor(id ,name , dept){
        super(name , id ) ; 
        this,dep
    }
}