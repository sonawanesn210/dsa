// if we want sorted arr with merging 

function merge(arr1,arr2){
let arr =[]
let d1=0
let d2=0
let d3=0
while(d1<arr1.length && d2<arr2.length ){
    if(arr1[d1]<arr2[d2]){
        arr[d3] =arr1[d1]
        
         d1++
    }else{
        arr[d3]=arr2[d2]
        d2++
    }
    d3++
}
while(d1<arr1.length){
    arr[d3]=arr1[d1]
    d1++
    d3++
}
while(d2<arr2.length){
    arr[d3]=arr2[d2]
    d2++
    d3++
}
return arr

}

console.log(merge([1,2,3,4],[5,6])) 

