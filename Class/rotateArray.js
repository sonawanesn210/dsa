/*  function rotateArr(arr1){
    let left =0
    let right =arr1.length - 1
    while(left<right){
        arr1[left] = arr1[left] + arr1[right]
        arr1[right] = arr1[left] - arr1[right]
        arr1[left] = arr1 [left] - arr1[right]
        left++
        right--
    }

    return arr1
}
let arr1 = [1,2,3,4,5,6]
const revrseArr = rotateArr(arr1)
//console.log(revrseArr)
let getKEle =  rotateArr(revrseArr.slice(0,3))
//console.log(getKEle)
let remainingEle = rotateArr(revrseArr.slice(3))
//console.log(remainingEle)
let result = getKEle.concat(remainingEle)
console.log(result)
 


 function rotateArray1(arr2,k){
    let temp = (new Array(arr2.length)).fill(0)
    for(let i = 0;i<arr2.length ;i++){
        let shiftIndex = (i+k) % arr2.length
        temp[shiftIndex] = arr2[i]
     
    }
    for(let i =0;i<arr2.length;i++){
        arr2[i] =temp[i]
    }

}

let arr2 = [1,2,3,4,5,6]
rotateArray1(arr2,3)
console.log(arr2)  */

function rotate(arr3,left,right){
   while(left<right){
    [arr3[left],arr3[right]] = [arr3[right],arr3[left]]
    left++
    right--
   }
}

function kRotation(arr3,k){
    rotate(arr3,0,arr3.length-1)
  //  console.log(arr3)  [ 6, 5, 4, 3, 2, 1 ]
    rotate(arr3,0,k-1)
   // console.log(arr3)  [ 5, 6, 4, 3, 2, 1 ]
    rotate(arr3,k,arr3.length-1)
  //  console.log(arr3)  [ 5, 6, 1, 2, 3, 4 ]
}
let arr3 = [1,2,3,4,5,6]
kRotation(arr3,2)
    console.log(arr3) //[ 5, 6, 1, 2, 3, 4 ]