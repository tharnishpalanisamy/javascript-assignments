// 2. Function Overloading (by number of arguments using arguments.length)
//  Write a function welcome() that:
// •	If called with 1 argument, prints "Welcome To <name>".
// •	If called with 2 arguments, prints "Welcome To <firstname> <lastname>".
// •	If called with 3 arguments, prints "Welcome To <firstname> <middlename> <lastname>".
// •	If called with no arguments, prints "Hello, Welcome".


function welcome(){
    const count = arguments.length 

    switch(count) {
        case 1 :
            return `Welcome ${arguments[0]}` 
            break; 
        case 2:
            return `welcome ${arguments[0]} ${arguments[1]}` 
            break ;
        case 3: 
            return `welcome ${arguments[0]} ${arguments[1]} ${arguments[2]}` 
            break ;
        default:
            return `Hello , Welcome`
    }
}

console.log(welcome("Walter","Hartwell","White"))