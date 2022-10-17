function removeDuplicates(str){
    let newStr=""
    if(str.length==0) return newStr
    for( let i=0;i<str.length;i++){
        if(str[i]!=str[i+1]){
            newStr =newStr+str[i]
        }
    }
    return newStr
}

//console.log(removeDuplicates("aaabbbbcccccddddddbd"))

function removeDupSet(arr1){
    let set = new Set(arr1)
return [...set].join("")
}
console.log(removeDupSet("aaabbbbcccccddddddbd"))