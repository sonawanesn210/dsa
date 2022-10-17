

function swapNum(a,b){
    a= a+b
    b= a-b
    a = a-b
    return a + " " + b
}

console.log(swapNum(5,8))

function tempSwap(a,b){
    let temp = a
    a =b
    b= temp
    return a + " " + b
}

console.log(tempSwap(2,6))

function swapEs6(a,b){
    [a,b] = [b,a]
    return a + " " +b
}

console.log(swapEs6(10,20))