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


const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const names = ["john", "mary", "alice"];
const uppercaseNames = names.map((name) => name.toUpperCase());
console.log(uppercaseNames); // Output: ["JOHN", "MARY", "ALICE"]

const fruits = ["apple", "banana", "orange"];
const lengths = fruits.map((fruit) => fruit.length);
console.log(lengths); // Output: [5, 6, 6]
