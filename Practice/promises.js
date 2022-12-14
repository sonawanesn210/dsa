/* const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
      resolve();
    } else {
      reject();
    }
  });
 
  promise
    .then(function () {
      console.log("Promise resolved successfully");
    })
    .catch(function () {
      console.log("Promise is rejected");
    });


    /////////using set time out

    const promise1 = new Promise(function (resolve, reject) {
      const string1 = "geeksforgeeks";
      const string2 = "geeksforgeeks";
      if (string1 === string2) {
        setTimeout(()=>{
          resolve("Promise resolved successfully");
        },2000)
       
      } else {
        setTimeout(()=>{
          reject("Promise is rejected");
        },2000)
       
      }
    });
   
    promise1
      .then(function (data) {
        console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });

 */

      const prom = new Promise(function (res,rej){
        const s1="swap"
        const s2 ="swap"
        if(s1===s2){
          setTimeout(()=>{
            res("Same")
          },2000)
        }else{
          setTimeout(()=>{
            rej("diff")
          },2000)
        }
      })


      prom
      .then(function(data){
        console.log(data)
      }).catch(function(err){
        console.log(err)
      })