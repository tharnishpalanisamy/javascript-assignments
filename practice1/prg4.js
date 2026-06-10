class Student{
    static passCount = 0 ; 
    static failCount = 0 ; 
    constructor(name , marks){
        this.name = name ; 
        this.marks = [...marks] 
        this.grade = 'N' ; 
        this.res = 'N'
    } 
    result(){
        this.total = 0 ; 
         
        for(let i = 0 ; i< 3 ; i++){
            this.total +=  this.marks[i] ; 
        }
        if(this.total >= 270) {
            this.grade = 'A'
            this.res = 'Pass' 
            Student.passCount += 1 
        } 
        else{
            this.grade = 'B'
            this.res = 'Fail'
            Student.failCount += 1
        }
    }
    display(){
        this.result() 
        return `${this.name} ${this.total}  ${this.grade} ${this.res}`
    }
}

let tharnish = new Student('Tharnish' , [90,90,100]) 
console.log(tharnish.display()) 

console.log(Student.failCount)