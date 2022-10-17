
////////////////////////////////////////////////////////////////////////////////
function reverseString(str){
    if(str.length <=1) return str
    return reverseString(str.slice(1))+str[0]
}

//console.log(reverseString("hello"))
////////////////////////////////////////////////////////////////////////////////////////
//iteration
function reverseStr(str){
    let newStr =""
    for(let i =str.length-1;i>=0;i--){
     newStr = newStr+str[i]
    }
    return newStr
 }
 console.log(reverseStr("hello"))
function reverse(arr,left,right){
    if(left<right){
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        reverse(arr, left+1 ,right-1)
    }
}

let str = "hello"
//reverse()
let arr = str.split('')
reverse(arr,0,arr.length-1)
str = arr.join('')
//console.log(str)

/* let stack =[]

let size =stack.length

function push(newVal){
    stack[size]=newVal
    size++
}

function pop(){
    removedItem=stack[size-1]
    size--
    stack.length=size
    return removedItem
}

function reverseStr(item){
    for(let i=0;i<item.length;i++){
        push(item[i])
    }

    for(let i=0;i<item.length;i++){
        item[i]=pop()
    }
}

let string = "hello"
string=string.split("")
reverseStr(string)
console.log(string.join("")) */