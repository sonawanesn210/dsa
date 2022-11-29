
//REVERSE
function rev(n) {
    n = n + ""
    let arr = n.split("").reverse().join("")
    return arr
}

// console.log(rev(2341))

function revStr(str) {
    let arr = str.split('').reverse().join('')
    return arr
}

//console.log(revStr("abc"))

function palindrome(str) {
    str = str.toLowerCase()
    let newStr = str.split('').reverse().join('')
    if (str === newStr) {
        return true
    }
    return false
}

// console.log(palindrome("namaN"))

/* let possibleCombinations = (str) =>{
 let combinations = [];
   for(let i = 0 ;i < str.length; i++)
 {
     for(let j = i + 1; j< str.length + 1; j++)
     {
         combinations.push(str.slice(i , j));
     }
 }
return combinations;
}
console.log(possibleCombinations('Dog'));
*/
function possibleComb(str) {
    let combinations = []
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j))
         }
        }
     return combinations
}
//console.log(possibleComb("abc"))

//Sort //Write a JavaScript function that returns a passed string with letters in alphabetical order. 

/* function sorting(str){
let newStr=str.split("").sort().join("")
return newStr
}
console.log(sorting("dacb")) */


//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

function upper(str){
    str=str.split(" ")
    for(let i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1)
        
    }
    return str.join(" ")
}

//console.log(upper("hi i am swap"))

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function findLongestWord(str){
str=str.split(" ")
console.log(str)
let result=str[0]
console.log(result)
for(let i=0;i<str.length;i++){
     if(result.length<str[i].length)
     result=str[i]
}
return result
}

console.log(findLongestWord("hi i am Swapnali"))

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
//1 INCLUDES
function isVowelincludes(str){
    let vowels =["a","e","i","o","u"]
    let count=0
    str= str.toLowerCase()
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            count++
        }

    }
    return count
}

//console.log(isVowelincludes("JavaScript program"))

//INDEXOF
function isVowelIndesxOf(str){
    str =str.toLowerCase()
    let count =0
    let vowels='aeiou'
    for(let i=0;i<str.length;i++){
        if(vowels.indexOf(str[i])!=-1){
            count++
        }
    }
    return count
}

//console.log(isVowelIndesxOf("JavaScript program"))


//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not

function isPrime(n){
    if(n<2) return false
    for(let i=2;i<n;i++){
        if(n%i===0)return false
    }
    return true
}

//console.log(isPrime(37))