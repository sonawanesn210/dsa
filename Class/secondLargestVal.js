function secLarg(arr){
  let first =arr[0]
  let second =-Infinity
  for( let i=0;i<arr.length;i++){
    if(first<arr[i]){
      second=first
      first = arr[i]
    }else if(second<arr[i]){
      second = arr[i]
    }
  }
  return second
}

console.log(secLarg([1,5,7,8,3,20,10]))