// 2.	Create an object using new Object() to store book details (title, author, price). Add a method to print details

const book = new Object({
    title:"" , 
    author : "" , 
    price : 0 ,
    displayDetails:function(){
        return `title:${this.title} \nAuthor:${this.author} \nPrice:${this.price}`
    }
})
book.title = "Think and Grow Rich" 
book.author = "Nepolean Hill" 
book.price = 250 
console.log(book.displayDetails())