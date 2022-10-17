
///Recursion
function capitalisedFirstLet(arr){
    let result =[]
    if(arr.length === 0) return []
    let  newArr = arr[0][0].toUpperCase() + arr[0].slice(1)
    
    result.push(newArr)
  //  console.log(result)
   return result.concat(capitalisedFirstLet(arr.slice(1)))
}

console.log(capitalisedFirstLet(["abc","xyz","pqr","stu"]))
 

const arr1 = [ "cat","dog","rat"]
function capitalisedFirstLetter(arr1,index){
    if(index<arr1.length){
        arr1[index] = arr1[index][0].toUpperCase() + arr1[index].slice(1)
        capitalisedFirstLetter(arr1,index+1)
       // console.log(arr1)
    }
}
capitalisedFirstLetter(arr1,0)
console.log((arr1))


//Iteration

function capital(arr){
    for( let i=0;i<arr.length;i++ ){
        arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1) //insted of slice(1) we can use substr(1) or substring(1)
    }
    return arr
}

console.log(capital(["abc","xyz","pqr","stu"]))