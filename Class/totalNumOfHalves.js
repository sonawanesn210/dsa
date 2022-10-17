function numOfHalves(n){
    let count =0
    while(n>1){
        n = n/2
        count ++
    }
    return count//4
}
function totalnum(n){
    let total = 0
    for(let i =0;i<n;i++){
        total = total+ numOfHalves(n)
    }
    return total
}
 console.log(totalnum(10)) //40
 //tc O(nlogn)  === n * logn