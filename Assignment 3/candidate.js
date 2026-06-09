const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name") 
const dob = document.getElementById("dob") 
const candidateForm = document.getElementById("candidate-form") 
const result = document.getElementById("result")
candidateForm.addEventListener("submit",function(event){ 
    event.preventDefault() 
    const gender = document.querySelector('input[name="gender"]:checked')

    if(!firstName.value){
        alert("Enter First Name")
        return 
    }
    if(!lastName.value){
        alert("Enter last Name")
        return 
    }
    if(!dob.value){
        alert("Enter dob")
        return 
    }
    const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/
    if(!dobRegex.test(dob.value)) {
        alert("Enter Dob in mm/dd/YYYY format")
        return
    }
    
    if (!gender) {
        alert("Please select a gender");
        return
    }

    const userDob = new Date(dob.value) 
    const curDate = new Date() 
    let age = curDate.getFullYear() - userDob.getFullYear()  
    
    if(userDob.getMonth() > curDate.getMonth() || userDob.getMonth() == curDate.getMonth() && userDob.getDate() > curDate.getDate()) {
        age --
    }

    if(age >= 18) {
        result.innerHTML = `${firstName.value} ${lastName.value} is Eligible To Vote`
    }
    else{
        result.innerHTML = `${firstName.value} ${lastName.value} is not Eligible to Vote`
    }
    document.body.appendChild(result)
    
})