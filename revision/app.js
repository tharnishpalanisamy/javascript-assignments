// import {add , sub} from './math.js' 

// console.log(add(10,10));


function countVowels(word) {
    let vowels = ['a' , 'e' , 'i' , 'o' , 'u' ] 
    let count = 0 
    for (let c of word) {
        if (vowels.includes(c.toLowerCase() ) ){
            count ++
        }
    }
    return count 
}

console.log(countVowels('Education'));


const students = [
 {name:"Alex", marks:95},
 {name:"John", marks:72},
 {name:"Bob", marks:88}
];

let filteredStudents = students.filter(student => student.marks >= 80) 
console.log(filteredStudents);


console.log(Array.prototype.map);

Array.prototype.myMap = function(condition){
    this.forEach(val => condition )
} 

