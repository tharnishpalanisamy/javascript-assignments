// 7.	Define a class Student with properties id, name, and 3 marks. Calculate total, average, result and grade. Based on the result (‘Pass’ or ‘Fail’) count the number of pass and failure in the class. Create multiple objects and display all the details.

class Student{
    constructor(id,name,marks){
        this.id = id 
        this.name = name 
        this.marks = marks 
        this.total 
        this.average 
        this.pass
        this.fail 
        this.grade
        
    }
    calculate(){
        this.total = 0 
        for(let i of this.marks){
            this.total += i 
        }
        this.average = Math.round(this.total / this.marks.length) 

        this.pass = 0 
        this.fail = 0 

        for (let mark of this.marks) {
            if (mark >= 40) {
                this.pass += 1 
            }
            else{
                this.fail += 1
            }
        }
        this.grade = "" 

        if (this.average >= 90) {
            this.grade = "A+"
        }
        else if(this.average >=80){
            this.grade = "A"
        }
        else if(this.average >=70){
            this.grade = "B"
        }
        else if (this.average >= 60) {
            this.grade = "C"
        }
        else if(this.average >= 40) {
            this.grade = "D"
        }
        else {
            this.grade = "F"
        }
    }
    display(){
        if(this.fail>1){
            this.grade = "F"
        }
        console.log(`Id:${this.id}\nName:${this.name}`)
        for(let i = 0 ; i < this.marks.length ; i ++){
            console.log(`Subject ${i+1} : ${this.marks[i]}`)
        }
        console.log(`Total:${this.total}\nAverage:${this.average}\nYour Grade:${this.grade}`)
        if (this.fail) {
            console.log(`You have passed on ${this.pass} Subjects and Failed on ${this.fail} Subjects`) 

        }
        else{
            console.log(`You have passed on all the ${this.pass} Subjects`)
        }

    }
}

const student1 = new Student(2,"Tharnish",[20,60,90])
student1.calculate()
student1.display()