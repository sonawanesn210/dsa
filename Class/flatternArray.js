function flattern(arr){
    let result =[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i]))
        result = result.concat(flattern(arr[i]))
        else result.push(arr[i])

    }
    return result
}

console.log(flattern([1,2,[3,5,6,[8,7,5,[1,2]]]]))