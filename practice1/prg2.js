//5.	Define a class Student with properties id, name, and marks. Create multiple objects and display details.

class Student{
    constructor(id , name , marks) {
        this.id = id ; 
        this.name = name ; 
        this.marks = [...marks] ; 
        this.total = 0 ; 

        for(let i = 0 ; i< 5 ; i++) {
            this.total += this.marks[i] ; 
        }
        this.average = this.total / 5 ; 
    }

    display(){
        for(let i = 0 ; i< 5 ; i++) {
            console.log(this.marks[i]);
            
        }
        return `name:${this.name} , Id:${this.id} , Total : ${this.total} , Average : ${this.average}`
    } 
}

let tharnish = new Student(57 , 'tharnish' , [60,70,80,80,70]) ; 
console.log(tharnish.display())