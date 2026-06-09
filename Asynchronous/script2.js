// //async/await
// //async makes a function return a promise 
// //await makes a async function wait for a promise

// //prepare maggi 
// // we are creating functions that will return promises 
// const addWater = () =>{
//     return new Promise((resolve,reject)=>{
//         resolve("Water is added to the Vessel")
//     })
// }

// const boilVessel = () =>{
//     return new Promise((resolve,reject)=>{
//         let temperature = 60 
//         setTimeout(()=>{
//             if(temperature > 50){
//                 resolve("Water is boiled")
//         }
//             else{
//                 reject("Failed ! Water is not Boiled")
//         }
//         },1000)
//     })
// }

// const addMasala = () =>{
//     return new Promise((resolve,reject)=>{
//         let available = true 
//         setTimeout(()=>{
//             if(available){
//             resolve("Masala is added") 
//         }
//         else{
//             reject("masala is not available , failed!")
//         }
//         },1000)
//     })
// }

// const addMaggi = () =>{
//     return new Promise((resolve,reject)=>{
//     let available = false 
//     setTimeout(()=>{
//         if(available){
//         resolve("Maggi is added , cooked and served") 
//     }
//     else{
//         reject("maggi is not available")
//     }
//     },1000)
// } ) }

// const prepareMaggi = async ()=>{
//     try{
//         const step1 = await addWater() 
//         console.log(step1) 

//         const step2 = await boilVessel() 
//         console.log(step2);

//         const step3 = await addMasala() 
//         console.log(step3); 

//         const step4 = await addMaggi() 
//         console.log(step4);
//     }
//     catch(error){
//         console.log(error)
//     }

    
    
    
// }

// prepareMaggi()



const takeVessel = () =>{
    return new Promise((resolve,reject)=>{
        resolve("Vessel is taken")
    })
}

const addWater = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("water is added")
        },3000)
    })
}

const addMaggi = function(){
    return new Promise((resolve,reject)=>{
        let available = true 
        if(available){
            resolve("Maggi is added")
        }
        else{
            reject("maggi is not available")
        }
    })
}

const addMasala = ()=>{
    return new Promise((resolve,reject)=>{
        let available = true 
        if(available){
            resolve("masala is added") 
        }
        else{
            reject("masala is not available")
        }
    })
}


async function cookMaggi(){
    try {
        const step1 = await takeVessel() 
        console.log(step1);
        const step2 = await addWater() 
        console.log(step2);
        
        const step3 = await addMaggi() 
        console.log(step3);
        
        const step4 = await  addMasala()
        console.log(step4);
        
    }
    catch(error){
        console.log();
        
        console.log(error)
    }
}

cookMaggi()