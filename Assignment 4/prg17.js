// 16.	Create a class Person with required properties and display( ) method. Override it in Student and Employee classes. Student class contains student result and grade additionally. Employee class contains department and salary additionally. Override display() method to print the corresponding details in the parent and the derived classes.


class Person{
    constructor(name,age,gender){
        this.name = name 
        this.age = age 
        this.gender = gender 
    }
    display(){
        return `Name:${this.name}\nAge:${this.age}\nGender:${this.gender}`
    }
}

class Student extends Person{
    constructor(name,age,gender,result,grade){
        super(name,age,gender) 
        this.result = result 
        this.grade = grade
    } 
    display(){
        return `Name:${this.name}\nAge:${this.age}\nGender:${this.gender}\nResult:${this.result}\nGrade:${this.grade} ` 

    }

}

class Employee extends Person{
    constructor(name,age,gender,salary,department) {
        super(name,age,gender) 
        this.salary = salary 
        this.dept = department
    }
    display(){
        return `Name:${this.name}\nAge:${this.age}\nGender:${this.gender}\nSalary:${this.salary}\nDepartment:${this.dept} ` 
    }
}

emp1 = new Employee("Tharnish",20,'Male' , 6800 , "Software") 
console.log(emp1.display()) 

student1 = new Student("Tharnish" , 18 , 'Male' , 'Pass' , 'A+') 
console.log(student1.display())