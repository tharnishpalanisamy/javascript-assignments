function Student(name , age , mark){
    this.name = name ; 
    this.age = age ; 
    this.mark = mark 

    
}
Student.prototype.display = function (){
        console.log(`Name : ${this.name }  Age : ${this.age} Mark:${this.mark}`); 
    }
    Student.prototype.isPass = function(){
        if(this.mark >= 40) {
            return true ; 
        }
        return false ; 
    }
    Student.prototype.grade = function(){
        let grade = ""
        if(this.mark >= 90) {
            grade = 'A+'
        }
        else if(this.mark >= 80) {
            grade = 'A' ; 
        } 
        else if (this.mark >= 70) {
            grade = 'B' 
        } 
        else if(this.mark >= 60) {
            grade = 'C'
        } 
        else if(this.mark >= 50) {
            grade = 'D'
        }
        else if(this.mark >= 40) {
            grade = 'E'
        } 
        else{
            grade = 'F' 
        }
        return grade ; 
    }

let Student1 = new Student('Tharnish' , 20 , 95) ; 
let Student2 = new Student('prajin' , 20 , 35) ; 
let Student3 = new Student('ram' , 20 , 55) ; 
let Student4 = new Student('Naveen' , 20 , 75) ; 

Student1.display()
console.log(Student1.isPass());

console.log(Student1.grade());

