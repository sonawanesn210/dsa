/* function arm(num){
    num =num+""
    let temp =num
    let sum  =0
    let digits = num.length
while(temp>0){
    let remainder =temp%10
    sum =sum+ remainder**digits
    temp =parseInt(temp/10)
}
if(sum==num){
    console.log(true)
}else{
    console.log(false)
}


}
arm(173) */

/* function pal(str){
    if(str.length<=1) return true
    if(str[0]==str.slice(-1)) return pal(str.slice(1,-1))
    return false
}
console.log(pal("namana")) */

/* function  reverse(str){
   /*  if(str.length<=1) return str
    return reverse(str.slice(1)) +str[0] 
    let newStr =""
    for(let i =str.length-1;i>=0;i--){
        newStr =newStr+str[i]
    }
    return newStr
}
console.log(reverse("hellm")) */

/* function reverse(arr){
    let i=0
    let j=arr.length-1
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++
        j--
    }
    return arr
}
console.log(reverse([1,2,3,4,5])) */
/* 
function capital(arr){
    for(let i=0;i<arr.length;i++){
        arr[i] =arr[i][0].toUpperCase()+arr[i].slice(1)
    }
    return arr

}

console.log(capital(["abc","xyz"])) */

/* function reverse(str){
   let str1=str.split(" ")
   for(let i=0;i<str1.length;i++){
    str1[i] =str1[i].charAt(0).toUpperCase()+str1[i].slice(1)
   }
   return str1.join(" ")
}

console.log(reverse("hi swap is here")) */

/* function isInt(num){
    let integer =true
    for(let i=0;i<num.length;i++){
        if(num[i]>=0 && num[i]<=9){
            continue

        }else{
            integer=false
            break
        }
    }
    return integer
}

console.log(isInt("m")) */
/* function isInt(n){
    if(typeof n !='number') return false
    let num =Math.floor(n)
    if(n!=num){
        return false
    }
    return true
}

console.log(isInt(12.12)) */
/* function count(n){
    if(n===0) return 0
    console.log(n)
    n--
    count(n)
}
count(10) */

/* function factorial(n){
    if(n===0) return 1
    return n*factorial(n-1)
}
console.log(factorial(5)) */

/* function factorial(n){
    let p=1
    for(let i=1;i<=n;i++){
        p=p*i
    }
    return p
}
console.log(factorial(5)) */

/* function fib(n){
    if(n<=2) return 1
    return fib(n-1)+fib(n-2)
}

console.log(fib(10)) */

/* function fibSeries(n){
    let arr =[]
    let n1=0
    let n2=1
    let nextNum;
    for(let i =0;i<=n;i++){
arr.push(n1)
nextNum=n1+n2
n1=n2
n2=nextNum
    }
    return arr
}
console.log(fibSeries(10)) */
/* function flattern(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flattern(arr[i]))
        }else{
            result.push(arr[i])
        }
        
    }
    return result
}
console.log(flattern([1,2,[3,5,[8,9,[1]]]])) */

/* function foo(n){
    if(n%3===0 && n%5===0){
        console.log("FooBar")
    } else if(n%3===0 && n%5!=0){
        console.log("Foo");
    } else if(n%5===0 && n%3!=0){
        console.log("Bar")
    }else{
        console.log("Nothing")
    }
}
foo(5)
foo(15)
foo(9)
foo(2) */

 /* function freq(arr){
    let obj ={}
    let maxFreq=0
    let maxChar=arr[0]
    for(let i=0;i<arr.length;i++){
        obj[arr[i]]=(obj[arr[i]]||0)+1
         if(maxFreq<obj[arr[i]]){
            maxFreq=obj[arr[i]]
            maxChar =arr[i]
        } 
        
    }
    console.log(obj)
    /* for(let val in obj){
        if(obj[val]>maxFreq){
            maxFreq=obj[val]
            maxChar=val
        }
    } 
    console.log(maxChar,maxFreq)
    
}
(freq("aaabcnacccda")) */

 

/* function freq(arr){
    let maxVal=0
    let maxChar=arr[0]
    let map =new Map()
    for(let i=0;i<arr.length;i++){
        if(map.get(arr[i])===undefined) map.set(arr[i],1)
        else map.set(arr[i],map.get(arr[i])+1)
    }
    for(let val of map){
        if(val[1]>maxVal){
            maxVal=val[1]
            maxChar=val[0]
        }
    }
    console.log(maxChar,maxVal)
}
(freq("aaabcnacccda")) */
/* 
function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let curr=i
        while(curr>-1 && arr[curr-1]>arr[curr]){
            [arr[curr-1],arr[curr]]=[arr[curr],arr[curr-1]]
            curr--
        }
    }
    return arr
}
console.log(insertion([7,5,2,9,1,6,8])) */

function maxSum(arr){
    let firstMaxEle =arr[0]
    let secondMaxEle =-Infinity
    for(let i=0;i<arr.length;i++){
        if(firstMaxEle<arr[i]){
            secondMaxEle=firstMaxEle
            firstMaxEle=arr[i]
        }else if(secondMaxEle<arr[i]){
            secondMaxEle=arr[i]
        }
       
    }
    console.log(firstMaxEle,secondMaxEle,firstMaxEle+secondMaxEle)
}
maxSum([1,5,8,20,1,23,8,70,13,110])