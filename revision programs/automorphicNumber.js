let n = 25;
let square = n * n;

if (square.toString().endsWith(n.toString()))
    console.log("Automorphic Number");
else
    console.log("Not an Automorphic Number");