/* function freqCount(arr){
    let maxOccure =0, maxOccureChar=0
    let obj = {}
    for(let i =0; i<arr.length;i++){
        obj[arr[i]] = (obj[arr[i]]||0) +1
       // console.log(obj)
       if(maxOccure<obj[arr[i]]){
        maxOccure =  obj[arr[i]]
        maxOccureChar=arr[i]
       }  }
    console.log(maxOccureChar)
    return maxOccure

}
console.log(freqCount([1,2,3,3,4,2,5,5,6,5,5,5,5,5,6,5]))
 */
/* 
function freqCountMap(arr){
    let map = new Map()
    let maxCount =0
    for(let i =0;i<arr.length;i++){
        if(map.get(arr[i])===undefined) map.set(arr[i],1)
        else map.set(arr[i],map.get(arr[i])+1)
    }
    for(let value of map){
        if(maxCount<value[1])
        maxCount = value[1]
    }

    return maxCount
}
console.log(freqCountMap([1,2,3,3,4,2,5,5,6,5,5,5,5,5,6,5]))
 */

function freqCountHas(arr){
    let maxCount = 0
    let freq ={}
    for(let i =0;i<arr.length;i++){
        if(freq.hasOwnProperty(arr[i])){
            freq[arr[i]]=freq[arr[i]]+1
          //  console.log(freq)
             }else freq[arr[i]]=1
             if(maxCount<freq[arr[i]])
             maxCount = freq[arr[i]] 
    }
return maxCount
   
}
console.log(freqCountHas([1,2,3,3,4,2,5,5,6,5,5,5,5,5,6,5]))