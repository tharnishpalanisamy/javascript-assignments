console.log('hello');
setTimeout(() => {
    console.log('hi');
    
}, 3000);


count = 0 
let id = setInterval(() => {
    console.log(count++);
    
}, 1000);

clearTimeout(id)