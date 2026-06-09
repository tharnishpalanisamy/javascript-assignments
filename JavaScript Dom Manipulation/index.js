const loginBtn = document.getElementById("login") 
const detailsBtn = document.getElementById("details") 
const logoutBtn = document.getElementById("logout") 
const themeBtn = document.getElementById("theme")

function loadLoginPage(){
    const fragment = document.createDocumentFragment()
    const form = document.createElement("form") 
    const emailLabel = document.createElement("label") 
    emailLabel.innerText = "Enter Your Email Id:"
    const email = document.createElement("input") 
    email.focus()
    email.type = "text"
    const span = document.createElement("span") 
    const main = document.querySelector(".main")

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
    const dummyContainer = document.createElement("div")
    
    fragment.append(emailLabel,email,span,passLabel,password,passSpan,checkLabel,checkbox,role,space,submitBtn,cancelBtn,dummyContainer)
    form.append(fragment)
    document.body.querySelector(".main").append(form) 
    email.focus()
    function clearDummy(){
            while(dummyContainer.firstChild) {
                dummyContainer.removeChild(dummyContainer.firstChild)
            }
        }
    cancelBtn.addEventListener("click",function(event){
        event.preventDefault()
        email.value = ""
        password.value = ""
        checkbox.checked = false 
        submitBtn.disabled = true
        clearDummy()
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
        
        clearDummy()
        const savedMail = document.createElement("p") 
        savedMail.innerHTML = `Saved Details <br>Email : ${email.value}` 
        const savedPass = document.createElement("p") 
        savedPass.innerHTML = `Password : ${password.value}` 
        dummyContainer.append(savedMail,savedPass)

        setTimeout(() => {
            clearDummy()
            clearApp()
            loadDetailsPage()
            
        }, 5000);

    })
}

function loadDetailsPage(){
    const fragment = document.createDocumentFragment()
    const form = document.createElement("form")
    const nameLabel = document.createElement("label") 
    nameLabel.innerText = "Enter Your Name : "
    const name = document.createElement("input")
    name.focus()
    name.value = localStorage.getItem("name") || "" 
    name.style.width = "300px"
    const nameSpan = document.createElement("span") 
    nameSpan.style.color = "red"
    const emailLabel = document.createElement("label") 
    emailLabel.innerHTML = "<br><br>Enter Your Email : "
    const email = document.createElement("input") 
    email.style.width = "300px"

    email.value = localStorage.getItem("email")

    const dobLabel = document.createElement("label") 
    dobLabel.innerHTML = "<br><br>Enter your date of birth : "
    const dob = document.createElement("input") 
    dob.value = localStorage.getItem("dob") || ""

    dob.type = "date"
    dob.placeholder = "yyyy-mm-dd"
    dob.style.width = "300px"

    let agePara = document.createElement("p") 
    agePara.innerText = "Enter your dob to calculate your age"

    const genders = ["Male","Female","Other"] 
    const genderContainer = document.createElement("div") 

    genders.forEach(gender =>{
        let label = document.createElement("label") 
        label.innerText = gender 

        const input = document.createElement("input") 
        input.type = "radio"  
        input.name = "gender" 
        input.value = gender 

        genderContainer.append(label,input)

    })



    const skillsPara = document.createElement("h4") 
    skillsPara.innerHTML = "Skills "

    const skills = ["JavaScript","React","sql","NoSql","Angular" , "TypeScript"] 
    const skillContainer = document.createElement("div") 

    skills.forEach(skill =>{
        let label = document.createElement("label") 
        label.innerText = skill 
        const input = document.createElement("input") 
        input.type = "checkbox" 
        input.name = "skills" 
        input.value = skill
        skillContainer.append(label,input)
    })
    const skillsSpan = document.createElement("span") 
    skillsSpan.style.color = "red"


    const profileLabel = document.createElement("label") 
    profileLabel.innerHTML = `<br><br>Upload Your Profile : `
    const profile = document.createElement("input") 
    profile.type = "file" 
    profile.accept = "image/*"
    profile.id="profile"
    const preview = document.createElement("img") 
    if(localStorage.getItem("profile")){
        preview.src = localStorage.getItem("profile")
    }
    preview.classList.add("preview-img")

    const imageError = document.createElement("p")
    imageError.innerHTML = ""
    profile.addEventListener("change",()=>{
        const temp =profile.files[0]; 
        if(temp.size > (1000000*2 )) {
            imageError.innerText = "File Size exceeds 2mb" 
            imageError.style.color = "red" 

        }
        else{
            imageError.innerHTML = ""
        }
        if(temp){
            const reader=new FileReader();
            reader.onload=(e)=>{
                preview.src=e.target.result;
                localStorage.setItem("profile", e.target.result);
            };
            reader.readAsDataURL(temp);
        }
    })
    const descriptionLabel = document.createElement("label") 
    descriptionLabel.innerText = "Description :"
    const description = document.createElement("textarea") 
    description.value = localStorage.getItem("description") || ""
    description.style.marginTop = "15px"


    const submitBtn = document.createElement("Button") 
    submitBtn.innerText = "Submit"
    submitBtn.type = "button"
    submitBtn.disabled = true
    const space = document.createElement("p")
    space.innerHTML = `<br>`
    const cancelBtn = document.createElement("button") 
    cancelBtn.type = "button"
    cancelBtn.innerText = "cancel"

    fragment.append(nameLabel,name,nameSpan,emailLabel,email,dobLabel,dob,agePara,genderContainer,
    skillsPara,skillContainer,skillsSpan ,space,profileLabel,profile,imageError,preview,space,
    descriptionLabel,description,space,submitBtn,cancelBtn)
    form.append(fragment)
    document.querySelector(".main").append(form)
    name.focus()
    



    let age = null;
    if (dob.value) {
        calculateAge(dob.value);
    }
    
    const savedGender = localStorage.getItem("gender");
    if (savedGender) {
        const genderInput = genderContainer.querySelector(`input[value="${savedGender}"]`);
        if (genderInput) genderInput.checked = true;
    }
    genderContainer.addEventListener("change", (e) => {
    if (e.target.name === "gender") {
        localStorage.setItem("gender", e.target.value);
    }
    checkFormValidity();
});
    let checkboxErr = true 
    const savedSkills = localStorage.getItem("skills");
    if (savedSkills) {
        const skillsArray = savedSkills.split(", ");
        skillContainer.querySelectorAll('input[name="skills"]').forEach(cb => {
            if (skillsArray.includes(cb.value)) {
                cb.checked = true;
            }
        });

        checkboxErr = skillsArray.length < 2;
    }
    
    
    function checkFormValidity() {
        const selectedGender = genderContainer.querySelector('input[name="gender"]:checked');
        const selectedSkills = skillContainer.querySelectorAll('input[name="skills"]:checked');
        
        if (
            name.value.trim() !== "" &&
            email.value.trim() !== "" &&
            dob.value !== "" &&
            age !== null &&
            selectedGender &&
            imageError.innerText == "" &&
            description.value.trim() !== "" &&
            !checkboxErr &&
            !nameErr
        ) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }
    let nameErr = true 
    if (name.value.trim() !== "") {
    nameErr = false;
    }
    checkFormValidity();
    name.addEventListener("input",function(){
        const nameRegex = /^[a-zA-z ]{1,20}$/
        if(!nameRegex.test(name.value)) {
            nameSpan.innerHTML = "Name Should only contain Alphabets and spaces" 
            nameErr = true
        }
        else{
            localStorage.setItem("name",name.value)
            nameErr = false
            nameSpan.innerHTML = ""
        }
        checkFormValidity()

    })
    
    skillContainer.addEventListener("change",function(){
        let elements = skillContainer.querySelectorAll('input[name="skills"]:checked')  
        if(elements.length < 2) {
            skillsSpan.innerText = "Select Atlease 2 SKills"
            checkboxErr = true
        }
        else{
            const values = Array.from(elements).map(cb => cb.value).join(", ");
            localStorage.setItem("skills", values);
            checkboxErr = false
            skillsSpan.innerText = ""
        }
        checkFormValidity()
    })

    function calculateAge(dob){
        const userDob = new Date(dob)
        let curDate = new Date() 
        age = curDate.getFullYear() - userDob.getFullYear()

        if (userDob.getMonth() > curDate.getMonth() || userDob.getMonth() == curDate.getMonth() && userDob.getDate() > curDate.getDate()){
            age --
            
        }
        
        agePara.innerHTML = `Age : ${age}`
        localStorage.setItem("dob",dob)
        checkFormValidity()


        
    }
    email.addEventListener("input",function(){
        checkFormValidity()
        localStorage.setItem("email",email.value)
    })
    genderContainer.querySelectorAll('input[name="gender"]').forEach(g=>{
        g.addEventListener("change",checkFormValidity)
    })
    skillContainer.querySelectorAll('input[name="skills"]').forEach(s=>{
        s.addEventListener("change",checkFormValidity)
    })

    description.addEventListener("input", function () {
        localStorage.setItem("description", description.value);
        checkFormValidity();
    });


    
    dob.addEventListener("change",function(){
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/ 
        if (dateRegex.test(dob.value)) {
            calculateAge(dob.value);
        }
        checkFormValidity()
    })

    cancelBtn.addEventListener("click", function () {
        name.value = ""
        email.value = ""         
        dob.value = ""
        age = null               
        agePara.innerHTML = "Enter your dob to calculate your age"
        nameSpan.innerHTML = ""  
        skillsSpan.innerText = ""
        checkboxErr = true       
        nameErr = true           

        const selectedGender = document.querySelector('input[name="gender"]:checked')
        if (selectedGender) selectedGender.checked = false
        checkFormValidity()
    })
    function displaySummary(){
        const existing = document.getElementById("summaryDiv")
        if (existing) existing.remove()
        const summaryDiv = document.createElement("div")  
        summaryDiv.id = "summaryDiv"

        let userName = name.value 
        let userEmail = email.value 
        let userDate = dob.value 
        let userAge = age 
        let userGender = document.querySelector('input[name="gender"]:checked')?.value
        let userSkills = Array.from(skillContainer.querySelectorAll('input[name="skills"]:checked'))
    .map(cb => cb.value)
    .join(", ")
        let userDescription = description.value 
        const summaryImg = document.createElement("img")
        summaryImg.src = preview.src
        summaryImg.classList.add("preview-img")
        const resultPara = document.createElement("p") 
        resultPara.innerHTML = `Name:${userName}<br>
        Email : ${userEmail}<br>
        Date Of Birth:${userDate}<br>
        Age : ${userAge}<br>
        Gender:${userGender}<br>
        ` 

        summaryDiv.classList.add('summary')
        summaryDiv.append(summaryImg,resultPara)
        form.append(summaryDiv) 

        localStorage.clear()


    }
    
    submitBtn.addEventListener("click",function(e){
        e.preventDefault() 
        displaySummary()
        
    })
}


const app = document.querySelector(".main");

function clearApp() {
    while (app.firstChild) {
        app.removeChild(app.firstChild); 
    }
}

loginBtn.addEventListener("click",function(){
    clearApp()
    loadLoginPage()
    
}) 
detailsBtn.addEventListener("click",function(){
    clearApp()
    loadDetailsPage()
    
})
logoutBtn.addEventListener("click",function(){
    clearApp()
    localStorage.clear() 
    loadLoginPage()
})

themeBtn.addEventListener("click",function(){
    const header = document.querySelector(".header");
    if (document.body.style.color=="white" && document.body.style.backgroundColor == "black") {
        document.body.style.color="black"
        document.body.style.backgroundColor = "white"
        header.style.backgroundColor = "#ffc8dd"


    }
    else{
        document.body.style.color = "white" 
        document.body.style.backgroundColor = "black"   
        header.style.backgroundColor = "#a2d2ff"
    }
})