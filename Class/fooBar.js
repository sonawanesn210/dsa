// Take a number and if number is multiple of 3 print "Foo" if number are multiple of 5 print "Bar" and if num is multiple of 5 and 7 print "FooBar". if not multiple of nothing print "nothing"

function printNum(num){
    if(num%3===0){
        console.log("Foo")
    }
    else if (num % 5 === 0 && num %7 !=0){
        console.log("Bar") 
    }
    else if (num% 5===0 && num % 7 ===0){
        console.log("FooBar")
    }
    else {
        console.log("Nothing")
    }
}
printNum(5)
printNum(9)
printNum(35)
printNum(21)
printNum(4)



