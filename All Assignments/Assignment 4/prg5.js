class Student{
    constructor(id,name,marks){
        this.id = id 
        this.name = name 
        this.marks = marks 
        this.total = 0 
        for(let i of marks) {
            this.total += i 
        }
        this.average = this.total / this.marks.length

    }
    display(){
        console.log(`Id:${this.id}\nName:${this.name}`) 
        for(let i = 0 ; i<this.marks.length;i++){
            console.log(`Subject ${i+1} : ${this.marks[i]}`)
        }
        console.log(`Total:${this.total}\nAverage:${this.average}`)
    }
}

const tharnish = new Student(57,"Tharnish",[90,70,80,60,70])
tharnish.display()
const naveen = new Student(35,"Naveen",[90,87,98,93,90]) 
naveen.display() 