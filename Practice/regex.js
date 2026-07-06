// Now let's level up.

// These are interview-level.

// Q1

// Password

// Minimum 8 characters
// At least one uppercase
// At least one lowercase
// At least one number


let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9]{8,}$/


// Q2

// Only vowels

// Should match

// aeiou

// Should NOT match

// apple

regex = /^[aeiou]+$/

// Q3

// Only hexadecimal characters

// Allowed

// A-F
// a-f
// 0-9
// Q4

regex = /^[a-fA-F0-9]+$/


// Starts with a letter

// Remaining characters can be letters, numbers, or underscore

// Length between 5 and 15

// Examples

// John_123
// abcde
// A1_b2

// Invalid

// 1john

regex = /^[a-zA-Z][\w]{4,14}$/



// Q5 (Most Important)

// Email validation without copying from the internet.

let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 