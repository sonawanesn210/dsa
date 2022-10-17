// naman <====>naman

function isPalindrome(str){

    if(str.length<=1) return true
    if(str[0]===str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false
}

console.log(isPalindrome("naman"))


function isPalindromeNum(num){
    num = num+""
    if(num.length<=1) return true
    if(num[0]===num.slice(-1)) return isPalindrome(num.slice(1,-1))
    return false
}

console.log(isPalindromeNum(123215))


function isPalindrome1(str,left,right){
    
    while(left<right){
        if(str[left]===str[right]){
            return isPalindrome1(str,left+1,right-1)
        }else{
            return false
        }
    }
    return true
}
let str = "naman"
console.log(isPalindrome1(str,0,str.length-1))