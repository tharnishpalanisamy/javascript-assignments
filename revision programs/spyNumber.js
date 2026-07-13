let n = 1124;
let temp = n;
let sum = 0;
let product = 1;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit;
    product *= digit;
    temp = Math.floor(temp / 10);
}

if (sum === product)
    console.log("Spy Number");
else
    console.log("Not a Spy Number");