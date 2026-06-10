function Person(name  , dob  ){ //constructor function   
    this.name= name ; 
    this.dob = new Date(dob) ; 

    this.curDate = new Date() ; 
    
    this.age = this.curDate.getFullYear() - this.dob.getFullYear() ; //21

    if(this.dob.getMonth() > this.curDate.getMonth() ) {
        this.age -- 
    }
    else if (this.curDate.getMonth() > this.dob.getMonth()  && this.dob.getDate() < this.curDate.getDate() ) {
        this.age -- ; 
    }
}

let sastha = new Person('tharnish' , '2005-11-11') 
console.log(sastha.age); 
