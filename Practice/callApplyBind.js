let person1={
    name:"Swapnali",
    place:"Akole",
   
}

let person2={
    name:"Ram",
    place:"Akole"
}
let showdetails= function (lname,age){
    console.log(this.name+" "+lname+" "+"from"+" "+this.place +" "+age)
}
showdetails.apply(person1,["s",20])
//function borrowing
showdetails.call(person2,"s",20)

//we can pass external arguments too
let obj =showdetails.bind(person1,"s",30)
obj()