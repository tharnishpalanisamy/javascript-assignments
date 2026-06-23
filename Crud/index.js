// const API = 'http://localhost:3000/student' 

// let addBtn = document.getElementById('addStudent') 
// addBtn.addEventListener('click' , async function(){
//     let rollno = document.getElementById('rollno') 
//     let name = document.getElementById('name') 
//     let studentClass  = document.getElementById('class') 
//     let section = document.getElementById('section') 

//     if(!rollno.value || !name.value || !studentClass.value || !section.value) {
//         alert('please enter the details correctly')
//         return  ; 
//     }

//     let student = {
//         rollno:rollno.value,
//         name:name.value , 
//         class:studentClass.value , 
//         section:section.value , 
//         createdDate : new Date().toISOString() 
//     }

//     await fetch(API , {
//         method:'POST' , 
//         headers :{
//             'Content-type' : 'application/json' 
//         } , 
//         body:JSON.stringify(student)
//     })
//     alert('Student Added Successfully')
// })




// //Q2. Write a function to fetch and display all students.
// const API = 'http://localhost:3000/student' 

// function createStudents(students) {
//     let table = document.querySelector('.table') 
//     let body = table.querySelector('tbody') 
//     body.innerHTML = "";
//     students.forEach(student => {
//         body.innerHTML += `
//         <tr>
//         <td>${student.rollno} </td> 
//         <td>${student.name} </td>
//         </tr>`
//     })

// }


// async function displayStudents(){
//     try{
//         let studentsData = await fetch(API) 
//         let students = await studentsData.json() 

//         createStudents(students)

//     }
//     catch(error) {
//         console.log(error); 
//         alert('Something Went Wrong')
        
//     }
// }

// displayStudents()







// Q3

// // Write a function to delete a student using id.
// const API = 'http://localhost:3000/student' 

// async function deleteStudent(id) {
//     try{
//         await fetch(`${API}/${id}` , {
//             method:"DELETE"
//         })
//         alert('deleted successfully') ; 
//     }
//     catch(error) {
//         alert('something Went Wrong') ; 
//     }
// }

// document.addEventListener('click' , async function(event){
//     if(event.target.classList.contains('deleteBtn')) {
//         let id = event.target.dataset.id ; 
//         await deleteStudent(id)
//     }
// })


// 4.Write a function to update a student's name using PUT request.

// const API = 'http://localhost:3000/student' 

// async function updateName(id , newName) {
//     try{
//         let studentData = await fetch(`${API}/${id}`) 
//         let student = await studentData.json()
//         await fetch(`${API}/${id}` , {
//             method:'PUT' , 
//             headers : {
//                 'Content-type' : 'application/json' 
//             } , 
//             body:JSON.stringify({ 
//                 id:student.id , 
//                 rollno : student.rollno , 
//                 name:newName , 
//                 studentClass : student.studentClass , 
//                 section : student.section , 
//                 createdDate:student.createdDate
//             })
//         })
//     }
//     catch(error) {
//         console.log(error); 
//         alert('Something Went Wrong')
        
//     }
// }


// Q5. Write a function to search students by roll number

const API = 'http://localhost:3000/student' 

function createStudents(students) {
    let table = document.querySelector('.table') 
    let body = table.querySelector('tbody') 
    body.innerHTML = "";
    students.forEach(student => {
        body.innerHTML += `
        <tr>
        <td>${student.rollno} </td> 
        <td>${student.name} </td>
        </tr>`
    })

}


function displayStudents(students){
    createStudents(students)
}


async function searchStudent(rollno) {
    try{
        let studentData = await fetch(`${API}?rollno=${rollno}`) 
        let students = await studentData.json() 
        displayStudents(students)
    }
    catch(error) {
        console.log(error) ; 
        alert('Student Not found')
        
    }
}