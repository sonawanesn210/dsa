class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

   /*  print(){
        //  var arr = [];
          var current = this.first
          while(current){
              console.log(current.val)
              current = current.next
          }
         // console.log(arr);
      } */
}

var stack1= new Queue()
console.log(stack1.enqueue("first"))
console.log(stack1.enqueue(200))
console.log(stack1.dequeue())
console.log(stack1.dequeue())


//stack1.print()
