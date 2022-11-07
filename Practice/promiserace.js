let p1= new Promise(function(resolve,reject){
    resolve("2")
})

let p2 = new Promise(function(resolve,reject){
   
    reject("rej")
})

let p3 = new Promise(function(resolve,reject){
    resolve("3")
})

//let promiseAll = romise
Promise.race([p1,p2,p3]).then(function(promiseArr){
    console.log(promiseArr)
}).catch(function(err){
    console.log(err)
})