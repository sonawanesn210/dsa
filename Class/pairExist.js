//  TWO POINTER METHOD =====ONLY WHILE ARRAY IS SORTED
/* 
 
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



function printPairs(newA, n, sum)
{
    let count = 0; // Initialize result
 
    // Consider all possible pairs and check
    // their sums
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (newA[i] + newA[j] == sum)
                 console.log(newA[i],newA[j])
}
 
// Driver function to test the above function
 
    let newA= [ 1, 5, 7, -1, 5 ];
    let n = newA.length;
    let sum = 6;
    printPairs(newA, n, sum); */

/* 
    function pairPresent(arr,sum){
        let count=0
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]===sum){
                    count++
                    console.log(arr[i],arr[j])
                }
            }
        }
        console.log("count is",count);
       
    }
 

  (pairPresent([ 1, 2, 3, 4,6,7,8,9, 11, -2, -97, 0, -11, 20],9)) */

  function pair(arr,sum){
    let map={}
    for(let i=0;i<arr.length;i++){
        let rem=sum-arr[i]
        if(map[rem]){
            let count =map[rem]
            for(let j=0;j<count;j++){
                console.log(arr[i],rem)
            }

        }
        if(!map[arr[i]]){
            map[arr[i]]=1
        }else{
            map[arr[i]]+=1
        }
    }
  }
pair([1, 2, 3, 4,6,7,8,9, 11, -2, -97, 0, -11, 20],9)

  