// fetch('https://dummyjson.com/products/1' , {
//     method:'PUT' , 
//     headers:{
//         'content-type' : 'application/json'
//     },
//     body : JSON.stringify({
//         price:3000000000, 
//         title: "hi",
//         stock : 10
//     })
// }).then(value=>{
//     return value.json()
// }).then(value =>{
//     console.log(value);
    
// }).catch(error => {
//     console.log(error);
    
// })


//async way 

getProducts = async () =>{
    try{
        let fectchedData = await fetch("https://dummyjson.com/products/" , {} ) 
        let data = await fectchedData.json() 
        console.log(data);
        
    }
    catch(error){
        console.log(error);
        
    }
}

getProducts()