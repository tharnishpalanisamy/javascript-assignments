// #1. Create an array which contain all your friends name and do the following with the friends name array.
// a.     Create the friend name array
// b.    Get the new friends name from <input> element and add at the beginning
// c.    Get the new friends name from <input> element and add at the end
// d.    Delete the friends from the beginning as well as from end
// e.    Sort your friends name
// f.     Print all your friends name using for, forEach, for – in and for – of
// g.   Separate all the names by comma and print it
// h.   Print current date and time in the neat form 

// Perform all the above operations using separate buttons and print each result in a neat form.


const friends = ["Steve","Tony","Bruce","Thor"] 

let name = document.getElementById("friend")


const unShift = document.getElementById("unshift") 
unShift.addEventListener("click",function(){
    friends.unshift(name.value)
    
    let h2 = document.createElement("h2") 
    let p = document.createElement("p")
    h2.innerHTML = "A value is inserted at the beginning using Unshift" 
    p.innerHTML = `THe Current Array after insertin the value at the begining <br> [${friends}]`
    document.body.append(h2,p)
})

const push = document.getElementById("push") 
push.addEventListener("click",function(){
    friends.push(name.value)
    console.log(friends);
    let h2 = document.createElement("h2") 
    let p = document.createElement("p")
    h2.innerHTML = "A value is inserted at the End using Push" 
    p.innerHTML = `THe Current Array after inserting the value at the end <br> [${friends}]`
    document.body.appendChild(h2)
    document.body.appendChild(p)
})

const sort = document.getElementById("sort") 
sort.addEventListener("click",function(){
    friends.sort() 
    console.log(friends);
    let h2 = document.createElement("h2") 
    let p = document.createElement("p")
    h2.innerHTML = "The Array is sorted using sort()" 
    p.innerHTML = `THe Current Array after sorting <br> [${friends}]`
    document.body.appendChild(h2)
    document.body.appendChild(p)
    
})

const time = document.getElementById("datetime") 
time.addEventListener("click",function(){
    const h3 = document.createElement("h4") 
    const date = new Date() 
    let meridian = date.getHours() >= 12 ? "pm" : "am"
    const displayHours = (date.getHours() % 12) || 12
    const month = ["jan","feb" , "march","april","May","jun","Jul","Aug","sep","oct","nov","dec"]
    h3.innerHTML = `${date.getDate()}/${month[date.getMonth()]}/${date.getFullYear()}  ${displayHours}:${date.getMinutes()}:${date.getSeconds()} ${meridian} `
    document.body.appendChild(h3)
}) 


let forBtn = document.getElementById("for") 
forBtn.addEventListener("click",function(){
    //normal for loop 
    let p = document.createElement("p")
    p.innerHTML = "Printing the Array using For loop" 
    document.body.appendChild(p)
    for(let i = 0 ; i < friends.length ; i++){
         let val = document.createElement("p") 
         val.innerHTML = friends[i]  
         document.body.appendChild(val)
    }

    //normal for each 
    let p1 = document.createElement("p")
    p1.innerHTML = "Printing the Array using ForEach loop" 
    document.body.appendChild(p1)
    friends.forEach(friend => {
        let val1 = document.createElement("P") 
        val1.innerHTML = friend 
        document.body.appendChild(val1)
    })

    //for in loop 
    let p2 = document.createElement("p")
    p2.innerHTML = "Printing the Array using For-in Loop" 
    document.body.appendChild(p2)
    for(let i in friends){
         let val2 = document.createElement("p") 
         val2.innerHTML = friends[i]  
         document.body.appendChild(val2)
    }

    //for of Loop 
    let p3 = document.createElement("p")
    p3.innerHTML = "Printing the Array using for-of loop" 
    document.body.appendChild(p3)
    for(let friend of friends) {
        let val3 = document.createElement("P") 
        val3.innerHTML = friend 
        document.body.appendChild(val3)
    }
})


