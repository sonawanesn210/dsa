function numOfHalves(n){
    let count =0
    while(n>1){
        n= n/2
        count ++
    }
    return count
}
console.log(numOfHalves(20))