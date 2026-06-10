let arr = [5,4,3,2,1] 

let l = 0 ; 
let r = arr.length - 1 

while(l<r) {
    temp = arr[l] 
    arr[l] = arr[r] ; 
    arr[r] = temp  ;
    l ++ 
    r -- 
}

console.log(arr)