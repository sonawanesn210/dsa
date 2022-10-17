// FIND MAX SUM OF ANY TWO ELEMENTS IN AN ARRAY

function maxSum(arr){
    let firstMaxEle = arr[0]
    let secondMaxEle = -Infinity
    for(let i =0;i<arr.length;i++){
        if(firstMaxEle< arr[i]){
            secondMaxEle = firstMaxEle
            firstMaxEle = arr[i]
           } else if(secondMaxEle<arr[i]){
            secondMaxEle= arr[i]
        }

    }
   // console.log(firstMaxEle,secondMaxEle)
   // return (firstMaxEle + secondMaxEle)
   return secondMaxEle
   
}

console.log(maxSum([4,10,5,3,6,1,2,3,9]))