// 🥉 Program 3 – Shopping Cart
// Concepts Covered
// Objects
// Arrays
// Encapsulation
// Class
// Static
// CRUD-like operations

// Requirements

// Product

// ShoppingCart

// Methods

// addProduct()

// removeProduct()

// updateQuantity()

// calculateTotal()

// displayCart()

// clearCart()

class ShoppingCart{
    constructor(){
        this.cart = [] 
    }
    addProduct(id ,name, qty , price){
        let product = {id:id , name:name , qty : qty , price : price} 
        this.cart.push(product)
    }
    removeProduct(productId) {  
        this.cart = this.cart.filter(obj => obj.id != productId) ; 
    }
    updateQuantity(productId , newQty) {
        this.cart.forEach(prod => {
            if(prod.id === productId) {
                prod.qty = newQty ; 
                return ; 
            }
        })
    }
    calculateTotal(){
        let bill = 0 ; 
        this.cart.forEach(prod=>{
            bill += prod.price * prod.qty ; 
        })
        return bill ; 
    }
    clearCart(){
        this.cart = [] 
    }
    displayCart(){
        this.cart.forEach(prod=>{
            console.log(`Id : ${prod.id}  Name:${prod.name} Price : ${prod.price} Qty :${prod.qty} Total:${prod.price * prod.qty}` );
        })
    }
}

let cart = new ShoppingCart() ; 
cart.addProduct(1,'pen',5,10) ; 
cart.addProduct(2,'pencil',10,5) ; 
cart.addProduct(3,'Phone',54,10000) ; 
cart.addProduct(4,'Scale',45,186550) ;  
console.log(cart.calculateTotal());
cart.displayCart()
cart.updateQuantity(1,10) 
cart.displayCart()
