let n = 18;
let temp = n;
let sum = 0;

while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
}

if (n % sum === 0)
    console.log("Harshad Number");
else
    console.log("Not a Harshad Number");