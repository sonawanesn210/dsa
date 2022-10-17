// 1+1+2+3+5+8+13....
        //  (6)
function fibonacci(n){
    if(n<=2) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(6))


//////////////////////////
function fib(n){
    if(n===0) return 0
    if(n===1||n===2){
        return 1
    }
    return fib(n-1) + fib(n-2)
}
console.log(fib(6))


/// fibonaci return array of fibonacci

function fibArr(n){
    let arr =[]
    let n1=0
    let n2=1
    let nextnum;
    for(let i=0;i<n;i++){
        arr.push(n1)
        nextnum =n1+n2
        n1=n2
        n2=nextnum

    }
    return arr
}

console.log(fibArr(6))

//using recursion//error return extra num
function fibSeries(n){
    if(n===1){
        return [0,1]
    }else{
        let s =fibSeries(n-1)
        s.push(s[s.length-1]+s[s.length-2])
        return s
    }
}

console.log(fibSeries(6))