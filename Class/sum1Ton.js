// using recursion 
function sum1Ton(n){
    if(n===1) return 1
    return n + sum1Ton(n-1)
}

console.log(sum1Ton(5))

5+sum1Ton(4)
   4+sum1Ton(3)
       3+ sum1Ton(2)
            2+sum1Ton(1)
                 1