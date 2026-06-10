let add = document.getElementById("add") 
let input = document.getElementById('input')
let friends = [] 
add.addEventListener('click' , function(){
    console.log('hi');
    if (input.value) friends.push(input.value)  
    input.value = ""
    console.log(friends);
     
})