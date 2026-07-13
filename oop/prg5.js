function myNew(constructor , ...args) {
    let obj = {} 
    obj.__proto__ = constructor.prototype ; 
    constructor.call(obj , ...args)  
    return obj 
}