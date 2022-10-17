function duplicateArr(arr){
    let freq = new Map()
    for( let i=0;i<arr.length;i++){
        if(freq.get(arr[i])===undefined) freq.set(arr[i],1)
         else freq.set(arr[i],freq.get(arr[i])+1)
      //  else map.set(arr[i],map.get(arr[i])+1)
        console.log(freq)
    }
    let res =[]
    for(let val of freq){
        if(val[1]>1){
            res.push(val[0])
        }
    }
    return res
}

console.log(duplicateArr([1,2,2,2,3,4,5,6,6,7,7,8])) 
////////USING OBJECT /////////////////////
function dup(arr){
    let obj = {}
for(let i =0;i<arr.length;i++){
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    console.log(obj)
}
let res1 = []
for(let val in obj){
    if(obj[val]>1){
        res1.push(val[0])
    }
}
return res1
}
console.log(dup([1,2,2,2,3,4,5,6,6,7,7,8]))

