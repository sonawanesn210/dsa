function reverseArr(arr){
    let i =0
    let j = arr.length-1
    while(i<j){
        arr[i] = arr[i]+ arr[j]
        arr[j]  = arr[i] - arr[j]
        arr[i] = arr[i] - arr[j]
        i++
        j--
    }
    return arr 
}
 console.log(reverseArr([1,2,3,4,5,6]))

 function reversees6(arr){
    let left =0
    let right = arr.length-1
    while(left<right){
        [arr[left],arr[right] ]= [arr[right],arr[left]]
        left++
        right--
    }
    return arr
 }
 console.log(reversees6([1,2,3,4,5,6,10,20]))