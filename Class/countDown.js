//ITERATION 
// 1 BY USING FOR LOOP
 function countDown(n){
    for(let i=n;i>0;i--){
        console.log(i)
    }
}
countDown(15) 

//WHILE LOOP
function countDown1(n){
    let i =n
    while(i>0){
       
        console.log(i)
        i--
    }
}
console.log("using while loop")
countDown1(25)

//RECURSION
function cDown(n){
    if(n===0) return 0
    console.log(n)
    n--
    cDown(n)
}
console.log("using recursion")
cDown(15)

console.log("countdown")
