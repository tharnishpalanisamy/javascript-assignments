// 2. Create two web pages.
// 	First page contains the login details:
// o	User name, password and confirm password details
// o	Validate using JavaScript that all the fields are not empty, user name only contains alphabets and blanks.
// o	Password should be the combination of capitals, small letters, numbers and special characters like !@#$%^&* and length between 8 to 15
// o	Password and confirm password must same.
// o	All these conditions are verified, control goes to next page
// 	Second page contains thee details about the candidate
// o	First Name - Text, Last Name – Text, DOB – Text and gender – Radio Button
// o	Validate using JavaScript that all the fields are not empty
// o	DOB contains numbers and /   [Format is mm/dd/yyyy]
// o	Calculate the age and check it is above 18 or not. If it is above 18, Print ‘(Full name) is able to vote this year’
// o	Or else Print ‘(Full name), Wait to reach 18 years’ 

const loginForm = document.getElementById("loginForm")
const name = document.getElementById("name") 
const password = document.getElementById("password") 
const submitBtn = document.getElementById("submitBtn") 
const confirmPass = document.getElementById("conform-password") 


// name.setAttribute("pattern",'^[a-zA-Z ]{1,20}$')

// password.setAttribute("pattern" , /^(?=.[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/)

// confirmPass.setAttribute("pattern" , /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/) 

let passwordMatches = false 
loginForm.addEventListener("submit",function(event){
    event.preventDefault()

    const nameRegex = /^[a-zA-z ]{1,20}$/ 
    if(!nameRegex.test(name.value)){
        alert("Username Should only contain alphabets and spaces"); 
        return
        
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/
    if(!passRegex.test(password.value)) {
        alert("Password should contain atleast 1 capital , 1 number and 1 symbol , it should be between 8 to 15 chars");
        return
    }

    if(password.value != confirmPass.value) {
        alert("Passwords does not match")
        return
    }

    window.location.href = "candidate.html";
})


// for candiate page 

