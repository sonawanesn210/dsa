function swapString(str1,str2){
  str1 =  str1.concat(str2)
  str2 = str1.slice(0,4)
  str1 = str1.slice(4,8)
  return str1 + " " + str2 
}

console.log(swapString("some","Good"))


let a = "Good"
let b = "One"
a = a.concat(b)
console.log(a)
b = a.slice(0,4)
console.log(b)
a = a.slice(4,7)
console.log(a + " " + b)
