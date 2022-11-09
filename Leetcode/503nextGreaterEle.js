/*Check if there is any element lesser than current element in the satck 
      a. If No lesser element found & the stack is empty, fill that index with -1.
 	     Then Insert the curr element into the stack.
      b. If No lesser element found & the stack has greater element than current, fill that index with the stack's top element. 
 	     push the curr element into the stack.
      c. If there is less element keep removing from the top of the stack until you find the next greater element.
 	     Fill that index with stack's top element and insert the current element into the stack 

     
For traversing in circular fashion, Do i % n
[1,2,1 ] 1,2,1
 0,1,2,   3,4,5
 3%3=0
 4%3=1
 5%3=2
*/

/* TIME COMPLEXITY = O(2N) + O(2N) ~~ O(N)
SPACE COMPLEXITY = O(N)

 */
// -------------------------------- STACK SOLUTION -------------------------------- \\

var nextGreaterElements = function(nums) {
  let stack = [];
  let output = [];
let n = nums.length
 for(let i=2*n-1; i>=0; i--) {
    
    let Index = i % n;
    while(stack.length > 0 && nums[Index] >= nums[stack[stack.length-1]]) {
        //console.log("Index",nums[Index])
       //console.log("top",nums[stack[stack.length-1]])
        stack.pop();
    }
    
    if(stack.length === 0){
        output[Index] = -1;
    }else{
        output[Index] = nums[stack[stack.length-1]]
    }
    
    stack.push(Index);
 }

 return output;
}

console.log(nextGreaterElements([1,2,1]))


