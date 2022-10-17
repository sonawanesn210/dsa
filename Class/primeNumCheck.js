function isPrime(num){
    if(num<2) return false
 for(let i =2;i<=(num/2);i++){
    if(num % i ===0) return false
 }
 return true
}

console.log(isPrime(5))

function isPrime1(num){
    if(num<2) return false
    for(let i =2;i<=(Math.sqrt(num));i++){
        if(num % i === 0) return false
    }
    return true
}

console.log(isPrime1(11))