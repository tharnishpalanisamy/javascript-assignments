// 14.	Create a class Temperature with a property Celsius. Provide a getter to return temperature in Fahrenheit by passing the Fahrenheit value.

class Temperature {
    constructor(celsius){
        this.tempCelsius = celsius
    }
    get getTempFahrenheit(){
        return `The temperature is ${(this.tempCelsius * 1.8 ) + 32 } Degree Fahrenheit`
    }
}

temp = new Temperature(45) 
console.log(temp.getTempFahrenheit) 