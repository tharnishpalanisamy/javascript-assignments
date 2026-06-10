class shape{
    constructor(){

    }
    area(){
        return 'nothing' 
    }
}

class circle extends shape {
    constructor(radius){
        super() ; 
        this.radius = radius 
    }
    area(){
        return 3.14 * this.radius * this.radius ; 
    }
}

let cicle = new circle(4) ; 
console.log(cicle.area());
