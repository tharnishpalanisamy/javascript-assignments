// 5.	Program code to change the case of each character in the string/sentence without using the built-in functions

let sentence = "This is JavaScript Programming" 

function toUpper(word){
    let result = ""
    for(let i in word) {
        let code = word.charCodeAt(i) 

        if (code>=97 && code <= 122) {
            code -= 32 
            result += String.fromCharCode(code)
        }
        else{
            result += String.fromCharCode(code)
        }
    }
    return result
}

function toLower(word) {
    let result = "" 
    for (let i in word) {
        let code = word.charCodeAt(i) 
        if(code>=65 && code<=90) {
            code += 32 
            result += String.fromCharCode(code)
        }
        else{
            result += String.fromCharCode(code)
        }
    }
    return result
}
console.log(toLower(sentence))
console.log(toUpper(sentence))