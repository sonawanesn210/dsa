/* function armstron(num){
    num=num+""
    let digits =num.length
    let sum =0
    let temp =num
    while(temp>0){
let rem = temp%10
console.log(rem)
sum=sum+rem**digits
console.log(sum)
temp=parseInt(temp/10)
console.log(temp)
    }
    if(sum==num){
        console.log("Yes")
    }else{
        console.log("No")
    }

}

armstron(153)  */

/* for( i=1;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    })
    
} 


function armstrong(n){
    n=n+""
    let sum =0
    let temp=n
    let digits =n.length
    while(temp>0){
        let remainder =temp%10
        sum = sum+remainder**digits
        temp=parseInt(temp/10)
    }
    if(sum==n){
        console.log(`${n} is armstong no`)
    }else{
        console.log("no")
    }
}

armstrong(9474)*/



function printArmstrong(s,l){
  
    for(let i =s;i<=l;i++){
       // n=n+""
        let sum =0
        let temp=i
        let digits =i.toString().length
        while(temp>0){
            let remainder =temp%10
            sum = sum+remainder**digits
            temp=parseInt(temp/10)
        }
        if(sum==i){
            console.log(i)
        }  
    }
}
printArmstrong(100,1000)