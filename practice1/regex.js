// let regex = /hello/ ; 
// console.log(regex.test("helo world"));
 

// we can also create regex object using new RegExp()  

// let exp = 'regex exp' 
// let regex1 = new RegExp(exp)


// // let regex = 'i have 5000 rupees' ; 
// // console.log(regex.match(/\d+/));    test the passed regex with existing (we are passing regex)

// let regex = /abc/ ; 
// console.log(regex.test("abcdefghijklmno"));    // text the regex with the passed value (we are testing regex)

// let space = " " ; 
// console.log(space.match(/\s/));

// /[abc]/ - means a or b or c 
// console.log(/[abc]/.test("cat"));


//quantifiers 
// + - one or more 
// * - zero or more 
// ? - zero or one 


//ranges 
// [0-9] [a-z] [A-Z] 

//^ - start of the string /^a/  - first letter should be a 

//& end of the string  /s&/ - last letter should be s 


////^\d$   - whole thing should only contain digits  

////^\d{10}$   - should only contain 10 digits   


// let email = /^[a-zA-Z]{1,}[a-zA-z0-9]{0,}@[a-zA-z]{1,5}\.[a-z]{2,5}$/

let email = /^[a-zA-Z0-9+_%-]+@[a-zA-Z+_%-]+\.[a-zA-Z]{2,}$/

console.log(email.test('Tharnish@gmail.com'));
