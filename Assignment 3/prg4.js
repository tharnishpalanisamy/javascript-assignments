// 4.	Program code to exhibit at least 15 functions in handling strings

let myString = "This is JavaScript Program"


console.log(myString.length);
console.log(myString.charAt(0));
console.log(myString.charCodeAt(0));
console.log(myString.concat(" And it can be used to Create Dynamic Webpages"))
console.log(myString.at(8));
console.log(myString[5]);
console.log(myString.slice(8,18)); 
console.log(myString.slice(-7));
console.log(myString.substring(19,27));
console.log(myString.substr(0,5));
console.log((myString.slice(0,5)).toLowerCase());
console.log((myString.slice(0,5)).toUpperCase());
let text1 = "       This string contains spaces at the Start" 
console.log(text1.trimStart());
text1 = "This String contains spaces at the End"
console.log(text1.trimEnd());
text1 = "          this string contains spaces at both sides       " 
console.log(text1.trim());
text1 = "Hello World"
console.log(text1.padStart(4,"_"));
let result = text1.repeat(2);
console.log(result)
let newString = text1.replace("Hello","Hii")
console.log(newString);
console.log(text1.split(" "))











