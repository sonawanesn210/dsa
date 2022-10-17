function mostFreq(arr){
    let freq = new Map()
    let maxFreq = 0
    let mostFreqElem =arr[0]
    for(let i =0; i<arr.length;i++){
        if(freq.get(arr[i])===undefined) freq.set(arr[i] , 1)
        else freq.set(arr[i],freq.get(arr[i])+1)
        //console.log(freq)
    }

    for(let val of freq){
        if(maxFreq<val[1]){
            maxFreq = val[1]
            mostFreqElem = val[0]
        }
    }
    console.log(mostFreqElem)
    return maxFreq
}

console.log(mostFreq([1,2,3,2,3,4,5,5,5,5,5,6,9,9,9,9,9,9,9,9,9,9]))


function mostfreqByObj(arr){
    let obj = {}
    let mFreq = 0
    let ele =arr[0]
    for(let i =0; i< arr.length;i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
        //console.log(obj)
        /* if(mFreq<obj[arr[i]]){
            mFreq=obj[arr[i]]
            ele=arr[i]
        } */
    }
    
    for(let val in obj){
        if(obj[val]>mFreq){
            mFreq= obj[val]
            ele = val[0]
        }
    } 
    console.log(ele)
    return mFreq

}

console.log(mostfreqByObj([1,2,3,2,3,4,5,5,5,5,5,6,9,9,9,9,9,9,9,9,9,9]))