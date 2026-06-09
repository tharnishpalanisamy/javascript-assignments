// function task1(callback) {
//     setTimeout(()=>{
//         console.log("1") ;
//         callback()
//     },500)
    
// }


// function task2(callback) {
//     setTimeout(()=>{
//     console.log("2");
//     callback()
//     },250)
// }

// function task3(callback){
//     setTimeout(()=>{
//     console.log("3");
//     callback()
// },1000) 
// }

// function task4(callback){
//     setTimeout(()=>{
//         console.log("4")
//         callback()
//     },6000) 
// }

// function task5(callback){
//     setTimeout(()=>{
//         console.log("5");
//         callback()
        
//     },5000)
// }
//call back hell 
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=>{
//                 task5(()=>{

//                 })
//             })
//         })
//     })
// })


//here () => {} acts as the call back function and when it is called it excutes the function inside it 


//asynchronous programming 

// const showMessage = (callback) =>{
//     console.log(callback);
// }

// function firstMessage(callback) {
//     setTimeout(()=>{
//         showMessage("hello") 
//         callback()
//     },1000)
// }

// function secondMessage() {
//     setTimeout(()=>{
//         showMessage("World")
//     },1200)
// }

// firstMessage(secondMessage)


//promise it has three states 1.fulfilled , 2.rejected , 3.pending 
//it is a object that holds the future values of a async operation 
//the Promise object takes a single call back function and that callback function takes 2 arguments \
//which are resolve and reject resolve means the promise is fulfilled and rejected means it is failed or an error occurred

// const promise = new Promise((resolve,reject)=>{
//     let fulfilled = false 
//     setTimeout(()=>{
//         if(fulfilled){
//         resolve("Promise is fulfilled")
//         }
//         else{
//             reject("Promise is rejected")
//         }
//         console.log(promise) // this prints either fulfilled or rejected based on code
//     },1000)
// })     
// console.log(promise) //this will print promis{<pending>}


//to access the promise we have then and catch (older method) 
//then takes a callback function that takes the resolve and catch catches the reject

// promise.then((value)=>{  
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

//promise chaining 
//even if i dont log it unhandled reject will be logged as script.js:116 Uncaught (in promise) Promise Three is Rejected in the console


const promise1 = new Promise((resolve,reject)=>{
    resolve("Promise one is resolved")
})
const promise2 = new Promise((resolve,reject)=>{
    resolve("Promise Two is resolved")
})
const promise3 = new Promise((resolve,reject)=>{
    resolve("Promise Three is Rejected")
})

// promise1.then(value=>{
//     console.log(value);
//     return promise2
// }).then(value=>{
//     console.log(value); 
//     return promise3
// }).catch(error=>{
//     throw new Error(error)
    
// })

//nesting promise(not recommended always use promise chaining instead)

// promise1.then((value)=>{
//     console.log(value); 
//     promise2.then((value =>{
//         console.log(value); 
//     promise3.catch((error =>{
//         console.log(error);
        
//     }))
        
//     }))
// })



//Promise.all([promise1,promise2,....])  this method is used to consume or fire all the promises at once 
//it fails even if one of the promise is rejected 

Promise.all([promise1,promise2,promise3]).then((values =>{
    console.log(values[0],values[1],values[2])    //it fails even if one promise if rejected
})).catch((error =>{
    console.log(error)
}))

// let age = 12
// let promise = new Promise((resolve,reject) =>{
//     if (age >= 18) {
//         resolve("Eligible")
//     }
//     else{
//         reject("not eligible")
//     }
// })

// promise.then((value)=>{
//     console.log(value)
// }).catch(error => {
//     console.log(error);
    
// })


// console.log(promise)