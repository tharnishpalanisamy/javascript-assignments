const form = document.createElement("form")
const nameLabel = document.createElement("label") 
nameLabel.innerText = "Enter Your Name : "
const name = document.createElement("input") 
name.style.width = "300px"
const emailLabel = document.createElement("label") 
emailLabel.innerHTML = "<br><br>Enter Your Email : "
const email = document.createElement("input") 
email.style.width = "300px"

email.value = localStorage.getItem("email")

const dobLabel = document.createElement("label") 
dobLabel.innerHTML = "<br><br>Enter your date of birth : "
const dob = document.createElement("input") 
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


const profileLabel = document.createElement("label") 
profileLabel.innerHTML = `<br><br>Upload Your Profile : `
const profile = document.createElement("input") 
profile.type = "file" 
profile.accept = "image/*"
profile.id="profile"
const preview = document.createElement("img") 
preview.style.width = "200px" 
preview.style.height = "200px" 

preview.style.display = "block"
preview.style.border = `2px solid gray`

profile.addEventListener("change",()=>{
    const temp =profile.files[0];
    if(temp){
        const reader=new FileReader();
        reader.onload=(e)=>{
            preview.src=e.target.result;
        };
        reader.readAsDataURL(temp);
    }
})



const submitBtn = document.createElement("input") 
submitBtn.type = "submit" 
submitBtn.disabled = true
const space = document.createElement("p")
space.innerHTML = `<br>`
const cancelBtn = document.createElement("button") 
cancelBtn.innerText = "cancel"

form.append(nameLabel,name,emailLabel,email,dobLabel,dob,agePara,genderContainer)
form.append(skillsPara,skillContainer)
form.append(space,profileLabel,profile,preview)
form.append(space,submitBtn,cancelBtn)
document.body.append(form)

let age = null;

function checkFormValidity() {
    const selectedGender = document.querySelector('input[name="gender"]:checked');
    const selectedSkills = document.querySelectorAll('input[name="skills"]:checked');

    if (
        name.value.trim() !== "" &&
        email.value.trim() !== "" &&
        dob.value !== "" &&
        age !== null &&
        selectedGender &&
        selectedSkills.length > 0
    ) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}



function calculateAge(dob){
    const userDob = new Date(dob)
    let curDate = new Date() 
    age = curDate.getFullYear() - userDob.getFullYear()

    if (userDob.getMonth() > curDate.getMonth() || userDob.getMonth() == curDate.getMonth() && userDob.getDate() > curDate.getDate()){
        age --
        
    }
    
    agePara.innerHTML = `Age : ${age}`
    checkFormValidity()


    
}
name.addEventListener("input",checkFormValidity)
email.addEventListener("input",checkFormValidity)
document.querySelectorAll('input[name="gender"]').forEach(g=>{
    g.addEventListener("change",checkFormValidity)
})
document.querySelectorAll('input[name="skills"]').forEach(s=>{
    s.addEventListener("change",checkFormValidity)
})



dob.addEventListener("change",function(){
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/ 
    if (dateRegex.test(dob.value)) {
        calculateAge(dob.value);
    }
    checkFormValidity()
})

cancelBtn.addEventListener("click",function(){
    name.value = "" 
    dob.value = ""
    agePara.innerHTML = `Enter your dob to calculate your age`
    document.querySelector('input[name="gender"]:checked').value = ""; 
    document.querySelector('input[name="skills"]:checked').value = ""; 



})

