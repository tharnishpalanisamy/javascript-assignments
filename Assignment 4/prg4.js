// 4.	Create an object using Object.create() with a prototype object product having a methods details(), calculate() and display()and it has product id, name, quantity and price. Calculate method calculates total amount and discount (20% of the total amount and payable amount) 


const Product = {
    "Product Id": 0,
    "name" : "Product" , 
    "Quantity" : "Quantity" , 
    "Price" : 0 , 
    "total":0,
    "discount":0,
    "bill":0,
    details:function(){
        console.log(`id:${this["Product Id"]}\nname:${this.name}\nQuantity:${this.Quantity}\nPrice:${this.Price}`) 
    },
    calculate:function(){
        this.total = this.Price * this.Quantity 
        this.discount = this.total * 0.2 
        this.bill = this.total - this.discount 
    }, 
    display:function(){
        this.details() 
        console.log(`Total Amount : ${this.total}\ndiscount:${this.discount}\nAmount Payable:${this.bill}`)
    }

}

const pen = Object.create(Product) 
pen['Product Id'] = 1 
pen.name = "pen" 
pen.Quantity = 10 
pen.Price = 10 
pen.details()
pen.calculate()
pen.display()
