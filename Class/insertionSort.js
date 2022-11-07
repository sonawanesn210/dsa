function insertion(arr){
    for(let i =1;i<arr.length;i++){
        let curr =i
        while(curr>-1 && arr[curr-1]>arr[curr]){
            [arr[curr-1],arr[curr]] = [arr[curr],arr[curr-1]]
            curr--
        }
    }
    return arr
}
console.log(insertion([9,5,8,2,4,3,1]))