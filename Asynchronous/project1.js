let p = document.querySelector(".joke-para")
const loadJoke = async() =>{
    try{
        let fetchedJoke = await fetch("https://api.chucknorris.io/jokes/random" , {
            method:'GET' , 
            headers:{
                Accept : 'application/json'
            } , 
        }) 
        let jokeData = await fetchedJoke.json()
        console.log(jokeData);
        p.style.textAlign = "justify"
        p.innerText = jokeData.value
    }
    catch(error){
        console.log(error);
        
    }
}

let btn = document.querySelector(".btn") 
btn.addEventListener("click",loadJoke)