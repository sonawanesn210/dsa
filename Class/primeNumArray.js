 function primeArr(num){
    let result =[]
    let count =0
    function isPrime(num){
        if(num<2) return false
        for(let i =2;i<num;i++){
            if(num % i===0) return false 
            count++

        }
        return true
    }

    num.forEach(element => {
        const item = isPrime(element)
        if(item){
            result.push(element)
        }

    });
return result
}

console.log(primeArr([-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])) 


 
 let arr = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let primeArray1 = []

for (let i = 0; i < arr.length; i++) {

    let isPrime = true;
    if (arr[i] < 2) {
        isPrime = false
    }

    for (let j = 2; j < arr[i] ; j++) {
        if (arr[i] % j == 0) {
            isPrime = false;
        }
    }

    if (isPrime == true) {
        primeArray1.push(arr[i])
    }
}

console.log(primeArray1)
 