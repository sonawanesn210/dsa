 function product(arr){
    if(arr.length===0) return 1
    return arr[0] * product(arr.pop(1))
}
console.log(product([1,2,3]))
 
function productArr(arr){
    let p=1
    for(let i=0;i<arr.length;i++){
        p=p*arr[i]
    }
    return p
}
console.log(productArr([3,6]))

function product(arr){
    if(arr.length===0) return 1
    return arr[0]*product(arr.slice(1))

}
console.log(product([5,1,4,-5,7]))
 