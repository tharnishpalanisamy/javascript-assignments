//api - 46c8ab3e01f4cc8266fa4f89a2bc3fce

const searchInput = document.getElementById("searchInput") 
const searchBtn = document.getElementById("searchIcon") 
const description = document.getElementById("description")
const date = document.querySelector(".date") 
const city = document.querySelector(".city")
const weatherImg = document.querySelector(".weatherImg") 
const weather = document.querySelector(".weather")
const temperature = document.getElementById("temperature")
const maxTemp = document.querySelector(".maxTemp") 
const minTemp = document.querySelector(".minTemp") 


const curDate = new Date() 
const months = ["january","February","March","april","May","June","July","August","September","October","November","December"] 
let day = curDate.getDate() 
let month = months[curDate.getMonth()] 
let year = curDate.getFullYear() 

date.innerHTML = `${day} ${month} ${year}`

const getWeather = async ()=>{
    try{
        const fetchWeather = await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=46c8ab3e01f4cc8266fa4f89a2bc3fce&units=metric",{
            headers:{
                Accept:"application/json"
            }
        })
        const weatherData = await fetchWeather.json() 
        console.log(weatherData)
        city.innerHTML = `${weatherData.name}`
        description.innerHTML = `${weatherData.weather[0].main}`
        weatherImg.innerHTML = `<img src = "http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png"/>`

    }
    catch(error){
        console.log(error)
    }
}

console.log(getWeather());

