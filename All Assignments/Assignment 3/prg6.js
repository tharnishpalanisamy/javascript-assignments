let arr1 = [4,2,6,4,8,2] 
let arr2 = [7,2,4,3,8,9,0,87,6,56,56,76,87] 

function merge(arr,l,m,r) { 
    let left = arr.slice(l,m+1) 
    let right = arr.slice(m+1,r+1) 
    let i = l
    let j = 0 
    let k = 0 

    while (j < left.length && k < right.length){
        if (left[j] >= right[k]) {
            arr[i] = left[j] 
            j ++
        }
        else{
            arr[i] = right[k] 
            k ++
        }
        i ++
    }

    while (j<left.length) {
        arr[i] = left[j] 
        i ++
        j++
    }
    while (k<right.length) {
        arr[i] = right[k] 
        k++
        i++
    }
}
function mergeSort(arr,l,r){ 
    if (l==r) {
        return arr
    }
    let m = Math.floor((l+r)/2) 
    mergeSort(arr,l,m) 
    mergeSort(arr,m+1,r) 
    merge(arr,l,m,r) 
    return arr

}

const sortedArr1 = mergeSort(arr1,0,arr1.length-1) 
const sortedArr2 = mergeSort(arr2 , 0 , arr2.length - 1 ) 

function mergeTwoArray(arr1,arr2){
    let res = [] 
    let i = 0 ; 
    let j = 0 ; 

    while (i<arr1.length && j<arr2.length) {
        if (arr1[i] >= arr2[j]){
            res.push(arr1[i])
            i++
        }
        else{
            res.push(arr2[j]) 
            j++
        }
    }
    res = res.concat(arr1.slice(i))
    res = res.concat(arr2.slice(j))
    return res
}
const sortedArray = mergeTwoArray(sortedArr1,sortedArr2) 
console.log(sortedArray);

