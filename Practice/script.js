// const myBox = document.getElementById("box") 

// myBox.addEventListener("click",function(event){
//     this.style.background = "purple"
//     this.textContent = "Clicked!"
// })

// myBox.addEventListener("mouseover",function(){
//     this.style.transform = "scale(1.2)"
// })

// myBox.addEventListener("mouseout",function(){
//     this.style.transform = "scale(1)"
// })

// const parent = document.getElementById("container") 
// const list = parent.getElementsByClassName("message")
// console.log(list)
// const l2 = parent.querySelectorAll(".message")
// console.log(l2)

// const second = document.getElementById("second") 
// console.log(second.nextElementSibling)


const div = document.createElement("div") 
div.style.color = "black"
div.id = "id"
div.innerHTML = `<h1>hiiii  created using js</h1>`
console.log(div)
document.body.appendChild(div)

//adding a list item (li) in a ul 

const list = document.getElementById("menu") 
const li = document.createElement("li") 
li.innerHTML = "Contact" 
const li2 = document.createElement("li") 
li2.innerHTML = "Experience" 
const li3 = document.createElement("li") 
li3.innerHTML = "Education"  
//appends multiple elements inside the parent node
list.append(li,li2,li3)

//adds multiple elements after the node
// list.after("l1,li2,li3")
//to see text content of a element  here text content displays empty spaces and even hidden texts(display:none) but innertext only displays things which are visible
// list.innerText += "hi"

list.classList.add("class1","class2")
list.classList.remove("class1","class2")
console.log(list.classList)



