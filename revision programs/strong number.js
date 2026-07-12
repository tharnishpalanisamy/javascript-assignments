let n = 145;
let temp = n;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact *= i;
    }

    sum += fact;
    temp = Math.floor(temp / 10);
}

if (sum === n)
    console.log("Strong Number");
else
    console.log("Not a Strong Number");