function merge(arr1,arr2){
    /* let arr =[]
    for(let i =0;i<arr1.length;i++){
        arr[i]=arr1[i]
    }

    for(let i =0;i<arr2.length;i++){
        arr[arr1.length+i]=arr2[i]
    }
    return arr */
    let arr = arr1.concat(arr2)
    return arr
    
}
console.log(merge([1,2,3,4],[5,6]))


//other methods
//////////////////////////////////////////1///////////////////////////////////////////////////////////
/* function merge(arr1,arr2){
   
    let arr = arr1.concat(arr2)
    return arr
    
}
console.log(merge([1,2,3,4],[5,6]))
 */

//////////////////////////////////////////////////////////////2/////////////////////////////////////
/* function merge(arr1,arr2){
   
    let arr = [...arr1,...arr2]
    return arr
    
}
console.log(merge([1,2,3,4],[5,6])) */