// 5! = 5*4*3*2*1===5*4!
// Using recursion
function factorial(n){
if(n===0) return 1
return n*factorial(n-1)
}
console.log("using recursion ===>",factorial(10))

// for loop
function fact(n){
    let result = 1
    for(let i=1;i<=n;i++){
        result = result * i
    }
    return result
}
console.log("using Iteration ===>",fact(10))