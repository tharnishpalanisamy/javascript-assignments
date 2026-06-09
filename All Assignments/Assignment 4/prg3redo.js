function Person(userName , gender , dob) {
    this.name = userName 
    this.gender = gender 
    this.userDob = new Date(dob)

    let sysDate = new Date() 
    let age = sysDate.getFullYear() - this.userDob.getFullYear() 
    if (
    this.userDob.getMonth() > sysDate.getMonth() ||
    (this.userDob.getMonth() === sysDate.getMonth() &&
     this.userDob.getDate() > sysDate.getDate())) {
        age--;
    }

    const display = () =>{
        console.log(`Name:${this.name}\nGender:${this.gender}\nDate of Birth :${dob}\nAge:${age}`)
    }
    display()
}

const father = new Person("Palanisamy","Male","1976-07-21") 
const mother = new Person("Thavasumani" , "Female" , "1984-06-20") 
const son = new Person("Tharnish" , "Male" , "2005-11-11") 


