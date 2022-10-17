//4^5==4*4*4*4*4 ==4*4^4

function power(b,exp){
    if(exp===0) return 1
    return b * power(b,exp-1)

}

console.log(power(2,5))

 // HANDLE ALL EDGE CASES
function withNegativePow(b,exp){
    if(exp == 0) return 1
    if(exp<0){
     exp = -exp
     b= 1/b
    }
    if(exp % 2 ===0){
        return withNegativePow(b*b , exp/2)
    }
    return b*withNegativePow(b,exp-1)
}
console.log(withNegativePow(2,-5)) 
