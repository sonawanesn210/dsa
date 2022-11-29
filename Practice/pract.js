/* function secondLarge(arr){
    let first =arr[0]
    let sec = -Infinity
    for(let i=0;i<arr.length;i++){
        if(first<arr[i]){
            sec = first
            first=arr[i]
        }else if(sec<arr[i]){
            sec = arr[i]
        }
    }
    console.log(first,sec)
    return (first+sec)
}

console.log(secondLarge([1,5,12,55,0,2,65,40,-75])) */

/*function reverse(arr,left,right){
    while(left<right){
        [arr[left],arr[right]]=[arr[right],arr[left]]
        //Below only works for numbers not for strings
       //arr[left] =arr[left]+arr[right]
      // arr[right]=arr[left]-arr[right]
       //arr[left] =arr[left]-arr[right]   
        left++
        right--
    }
 //   return arr

}

function kRotation(arr,k){
    reverse(arr,0,arr.length-1)
    reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
}
let arr=["My","Name","is","Swap"]
kRotation(arr,3)
console.log((arr))*/


function reverse(str){
    if(str.length<=1) return str
    
}