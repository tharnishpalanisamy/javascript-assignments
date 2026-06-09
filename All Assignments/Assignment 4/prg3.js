    // // 3.	Define a constructor function Person that creates objects with properties name, gender and date of birth. Calculate age based on date of birth and display all details. Create 3 objects using it.

    // function person(name,gender,dob){
    //     this.name = name 
    //     this.gender = gender 
    //     this.dob = dob

    //     this.months = ["Jan" , "Feb" , "Mar" , "apr" ,"May", "Jun" , "jul" , "Aug" , "sep" , "Oct" , "Nov" , "Dec"]
    //     this.userDob = new Date(dob) 
    //     this.day = this.userDob.getDate() 
    //     this.month = this.userDob.getMonth() 
    //     this.year = this.userDob.getFullYear() 

    //     this.curDate = new Date() 
    //     this.curDay = this.curDate.getDate() 
    //     this.curMonth = this.curDate.getMonth() 
    //     this.curYear = this.curDate.getFullYear() 
    //     this.age = this.curYear-this.year 
    //     if (this.month > this.curMonth) {
    //         this.age --
    //     }
    //     else if (this.month == this.curMonth){
    //         if (this.day <= this.curDay) {
    //             this.age --
    //         }
    //     }
    //     return `Name:${this.name}\nGender:${this.gender}\nDate of Birth :${this.months[this.month]} ${this.day} ${this.year}\nAge:${this.age}`


    // }

    // let person1 = new person("Tharnish" , "Male" , "11/11/2005")
    // console.log(person1)
    // let person2 = new person("Naveen" , "Male" , "13/04/2006")
    // console.log(person2) 
    // let person3 = new person("sam" , "Male" , "16/03/2005") 
    // console.log(person3)