// 13.	Create a Person abstract class with name, date of birth and address and display ( ) function which is abstract. Create Employee class inherits Person class and it contains date of join and department. Calculate age, experience and display all the details using display() along with these data.  

class Person{
    constructor(name,dob,address){
        if(this.constructor == Person){
            throw new Error("You cnnaot directly call this class")
        }
        this.name = name
        this.dob = new Date(dob) 
        this.address = address
    }
    display(){

    }
}

class Employee extends Person{
    constructor(name,dob,address,doj, department){
        super(name,dob,address)
        this.doj = new Date(doj)
        this.dept = department
        this.age 
        this.experience
    }
    calculateAge(){
        this.curDate = new Date() 
        this.age =  this.curDate.getFullYear() - this.dob.getFullYear()
        
        if(this.dob.getMonth() > this.curDate.getMonth() || (this.dob.getMonth() == this.curDate.getMonth()) && (this.dob.getDate() > this.curDate.getDate()) ) {
            this.age -- 
        }
    }
    calculateExperience(){
        this.experience = this.curDate.getFullYear() - this.doj.getFullYear() 
    }
    display(){
        console.log(`Name:${this.name}\nAge:${this.age} \nData of Birth : ${this.dob.getDate()}-${(this.dob.getMonth() + 1)}-${this.dob.getFullYear()}
            Address:${this.address}\nDate of Joining:${this.doj.getDate()}-${(this.doj.getMonth() + 1)}-${this.doj.getFullYear()}\nDepartment:${this.dept} Experience:${this.experience} Years`)
    }
}

const employee1 = new Employee("Tharnish","2005-11-11" , "Cbe" , "2025-03-16" , "Software") 
employee1.calculateAge()
employee1.calculateExperience()
employee1.display()

