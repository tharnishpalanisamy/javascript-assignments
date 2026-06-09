const form = document.createElement("form") 
const emailLabel = document.createElement("label") 
emailLabel.innerText = "Enter Your Email Id:"
const email = document.createElement("input") 
email.type = "text"
const span = document.createElement("span") 

const passLabel = document.createElement("label") 
passLabel.innerHTML = "<br>Enter Your Password:"
const password = document.createElement("input")
password.type = "password"
const passSpan = document.createElement("span") 
const checkLabel = document.createElement("label") 
checkLabel.innerHTML = "<br>Remember Me"
const checkbox = document.createElement("input")
checkbox.type = "checkbox"
const role = document.createElement("input") 
role.value = "user" 
role.hidden = true 
const submitBtn = document.createElement("input") 
submitBtn.type = "submit" 
submitBtn.disabled = true
const space = document.createElement("p")
const cancelBtn = document.createElement("button") 
cancelBtn.innerText = "cancel"


form.append(emailLabel,email,span,passLabel,password,passSpan,checkLabel,checkbox,role,space,submitBtn,cancelBtn)
document.body.append(form)

cancelBtn.addEventListener("click",function(event){
    event.preventDefault()
    email.value = ""
    password.value = ""
    checkbox.checked = false 
    submitBtn.disabled = true
})
let emailErr = false 
let passErr = true

function checkFormValidity() {
    if (!emailErr && !passErr && checkbox.checked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}



email.addEventListener("input",function(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    span.innerText = ""
    emailErr = false
    if(!emailRegex.test(email.value)) {
        span.innerHTML = "enter the specified format abc@gmail.com" 
        span.style.color = "red"
        emailErr = true
    }
    checkFormValidity()
})

password.addEventListener("input",function(){
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,16}$/ 
    passSpan.innerText = "" 

    if(!passRegex.test(password.value)) {
        passSpan.innerHTML = "Weak" 
        passSpan.style.color = "red"
        passErr = true
    }
    else{
        passSpan.innerHTML = "Strong" 
        passSpan.style.color = "green"
        passErr = false
    }
    checkFormValidity()
})

checkbox.addEventListener("change",checkFormValidity)
submitBtn.addEventListener("click",function(event){
    event.preventDefault() 
    localStorage.setItem("email",email.value) 
    localStorage.setItem("password",password.value)

    const savedMail = document.createElement("p") 
    savedMail.innerHTML = `Saved Details <br>Email : ${email.value}` 
    const savedPass = document.createElement("p") 
    savedPass.innerHTML = `Password : ${password.value}` 
    document.body.append(savedMail,savedPass)

    window.location.href = "details.html"
})



