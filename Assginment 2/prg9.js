// 9. Default Parameters with Arrow Function
// Write an arrow function to pass the radius and height of the cone and calculate the volume of the cone. Test it with and without passing a parameter.
// NOTE: Example for default parameter with arrow function:
// 	greet = (name = "Guest") => "Hello " + name;

const volume = (radius = 0 , height = 0 ) => {
    if (radius && height){
        let res = 3.14 * (radius*radius) * (height/3) ; 
        return `The Volume of cone is ${res}`
    }
    else {
        return `Function called without Parameters`
    }
}

console.log(volume(2,5))