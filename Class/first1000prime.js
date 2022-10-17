function isPrime(num){
    if(num<2) return false
 for(let i =2;i<=(num/2);i++){
    if(num % i ===0) return false
 }
 return true
}

function first1000PrimeNumber(){
    let num = 2; let count =0
 for(let i=1;i<=1000;i++){
     if(isPrime(num)){
         console.log(`${num}`)
       i++
       count++
     }
     i--
    
     num++
 }
 console.log("count is",count)
    
}
first1000PrimeNumber()