// let elements = document.getElementById('title') 
// // console.log(elements.innerHTML);

// // let h1 = document.querySelector('h1') 
// // console.log(h1.innerText);

// // let p = document.querySelectorAll('p') 

// // p.forEach(i =>console.log(i)
// // )

// // let text = document.getElementsByClassName('text') 
// // console.log(text); 

// // let btn = document.getElementsByTagName('button')
// // console.log(btn);


// // console.log(box.innerHTML);

// // console.log(box.innerText);

// // console.log(box.textContent);

// console.log(elements.getAttribute('id'));  

// let box = document.getElementById('box') 

// let h1 = document.createElement('h1') 
// h1.innerText = 'DOM' 
// box.append(h1)

// let title = document.createElement('h1')  
// title.innerText = 'Title' 
// box.prepend(title)

// let hr = document.createElement('hr') 
// box.before(hr)


// let btn = document.createElement("button") 
// btn.innerText = 'CLICK ME' 
// box.after(btn) 

// box.querySelector('p').remove()

// console.log(box.firstChild);
// console.log(box.childNodes);


// console.log(title.parentElement);
// console.log(title.parentNode);


let btn = document.getElementById('btn') 
btn.addEventListener('dblclick' , ()=>{
    console.log('DOubled click');
})

let count = 0 
btn.addEventListener('click' , ()=>{
    console.log('clicked');
    count ++ ; 
    console.log(count);
    
})


document.addEventListener('click' , function(e){
    console.log(e.clientX , e.clientY);
    
})

document.addEventListener('keydown' , (e) => {
    console.log(e.key);
    
})

let form = document.getElementById('form') 
form.addEventListener('submit' , function(e){
    e.preventDefault() 
    console.log('form submitted');
    
})

let box = document.getElementById('box') 

box.addEventListener('mouseenter' , function(){
    box.style.backgroundColor = 'black'
})

box.addEventListener('mouseleave' , function(){
    box.style.backgroundColor = 'white'
})

let input = document.getElementById('input') 
input.addEventListener('input' , function(){
    console.log(input.value);
    
})