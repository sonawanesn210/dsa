//  TWO POINTER METHOD =====ONLY WHILE ARRAY IS SORTED

 
// Given a sorted array of integer find whether a pair exist with a given sum
 function givenSum(arr,target){
    let left = 0;
    let right = arr.length-1
   // let pairExist = false
    while(left<right){
        if(arr[left]+arr[right]===target){
          return  [arr[left],arr[right]]
        
        }else if(arr[left]+arr[right]<target){
            left++
        }else{
            right--
        }
    }
    return false
}
//console.log(givenSum([1,4,5,7,9,10],6)) 



function pair(arr){
    arr.sort((a,b)=>a-b)
    let left =0
    let right = arr.length -1
    while(left<right){
        if(arr[left]+arr[right]===0) {
            return  [arr[left],arr[right]]
        }
        else if(arr[left]+arr[right]<0) left++
        else{ right--}
    }
    return false
}
const arr =[-5,-3,-2,1,7,-8,8]
//console.log(pair(arr)) 
 

/// PAIR WHOSE SUM CLOSEST TO 12

function sumClosest12(arr){
    let result = []
    let distance = Infinity
    let i = 0
    let j = arr.length -1
    while(i<j){
        if(Math.abs(arr[i]+arr[j]-12)<distance){
            result =[arr[i],arr[j]] 
            distance = Math.abs(arr[i]+arr[j]-12)
        }else if((arr[i]+arr[j]-12)>0){
            j--
        }else{
            i++
        }

    }
    return result
}
const arr1 =[1,2,3,4,5,10,12,20]
//console.log(sumClosest12(arr1))


function pairs(arr,target){
    let obj = {};
    for(let i of arr){
        let ele = target-i;
        obj[ele] = i;
    }
  let result = [];
  for(let i of arr){
    if(obj[i]){
        result.push([i, obj[i]])
    }
  }
  return result;
}

console.log(pairs([ 1, 2, 3, 4,6,7,8,9, 11, -2, -97, 0, -11, 20],9))