let arr=[1,2,3,4]
let output= arr.map((ele)=>{
    return 2*ele
})
console.log(output)

let output2= arr.filter((ele)=>{
    if(ele%2===0){
        return ele
    }
})

console.log(output2)


let output3= arr.reduce((acc,cur)=>{
    acc= acc+cur
    return acc
},0)
console.log(output3)