// 17.	Create a class Animal with a makeSound() method. Override it in Dog and Cat classes. Write a program to demonstrate runtime polymorphism: call the makeSound() method on different objects stored in an array of Animal type.


class Animal{
    constructor(){ }
    makeSound(){
        return `Animal is Making Sound`
    }
}

class Cat extends Animal{
    constructor(){
        super()
    }
    makeSound(){
        return `Meoww`
    }
} 

class Dog extends Animal{
    constructor(){
        super()
    }
    makeSound(){
        return `woof! woof!`
    }
}

class Goat extends Animal{
    constructor(){
        super()
    }
    makeSound(){
        return `mmehhh!`
    }
}

lst = [] 

animal1 = new Animal() 
lst.push(animal1) 

beluga = new Cat() 
hecker = new Cat()  

tommy = new Dog() 
puppy = new Dog() 

wilson = new Goat() 
vk = new Goat() 
lst.push(wilson)
lst.push(beluga) 
lst.push(tommy)
lst.push(hecker) 
lst.push(puppy)
lst.push(vk)

for(let animal of lst) {
    console.log(animal.makeSound())
}
