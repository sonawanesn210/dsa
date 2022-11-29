/* function make(banana){
    setTimeout(()=>{
        console.log(`Made ${banana} cake`)
    },5000)
}
make('rose')

function prepare(flav){
    return function(){
        setTimeout(()=>{
            console.log(`prepare ${flav} cake done`)
        },5000)
    }
}

const done = prepare("Apple")
done() */
/* 

function total (){
    let count =0
    return {
        inc : function (){
            return ++count
        },
        dec:function(){
            return --count
        },
        getCount : function(){
            console.log( count)
        }

    }
}

const counter =total()
counter.inc()
counter.inc()
counter.getCount()


function init(){
    let initial = false
    return function(){
        if(initial){
            return console.log("present")
        }
        initial = true
        return console.log("initial")
    }
}

const initialize = init()
initialize()
initialize()

function add(){
   let a =4
   function show(){
    console.log(a)
   }
   return show()
}

add() */

(function() {
  
 function multFn() {
    // This variable is local to
    // the closure and holds
    // its value inbetween
    // multiple calls
   var mult = 9;
   return function(val) {
     mult = mult * val;
     return mult;
   }
  };
  
  var newMult = multFn();
    
  // Call the method
  // newMultiple times
  console.log(newMult(2));
  console.log(newMult(3));
  console.log(newMult(5));
}());
