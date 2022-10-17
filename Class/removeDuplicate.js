function removeDupMap(arr){
    let freq = new Map()
    for(let i =0;i <arr.length;i++){
        if(freq.get(arr[i])===undefined ) freq.set(arr[i],1)
        else freq.set(arr[i],freq.get(arr[i])+1)
        console.log(freq)
    }
let res1 = []
let res2 =[]
let res = []
    for(let val of freq){
        if(val[1]===1){
            res1.push(val[0])
        } else if(val[1]>1){
            res2.push(val[0])
        }

        res = res2.concat(res1)
       // res =res.sort((a,b)=>(a-b))
    }
    return res
}

console.log(removeDupMap([1,1,2,22,3,5,11,2]))//[ 1, 2, 22, 3, 5, 11 ]



// USING SET 
 function removeDupSet(arr1){
    let set = new Set(arr1)
return [...set]
//console.log(set) // if we used console insted of return we get Set(6) { 1, 2, 22, 3, 5, 11 }  undefined


 }

 
console.log(removeDupSet([1,1,2,22,3,5,11,2]))//[ 1, 2, 22, 3, 5, 11 ]


function removeDuplicates(arr){
    let newarr=[]
    if(arr.length==0) return newarr
    for( let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i+1]){
         
           newarr.push(arr[i])
        }
    }
    return newarr
}

console.log(removeDuplicates([1,1,22,22,22,2,3]))