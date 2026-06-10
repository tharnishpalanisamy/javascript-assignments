const form = document.getElementById("loginForm") 
const email = document.getElementById("email") 
const password = document.getElementById("password") 

form.addEventListener('submit' , function(e){
    e.preventDefault() 


    let emailRegex = /^[a-zA-Z0-9_+%*&-]+@[a-zA-Z]+\.[a-zA-Z]+$/
    
    let passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/

    if(email.value === "") { 
        console.log('email cannot be empty');
        
        alert("enter your email correctly") 

        return
    }
    else if(!emailRegex.test(email.value)){
        alert("Email is not in the correct format") 
        return 
    }
    
    if(password.value == "") {
        alert("password cannot be empty")
        return ; 
    }
    else if (!passwordRegex.test(password.value)) {
        alert("password should contain atleast one capital , number and symbol and length should be above 8 ")
        return ; 
    }

    console.log(password.value)
    if(email.value === 'tharnishpalanisamy3@gmail.com' && password.value === 'Tharnish@2005') { 
        console.log('hi');
        
        alert("login successful")
    } 
})