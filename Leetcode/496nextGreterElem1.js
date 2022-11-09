/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// TC = O(m + n); SC = O(n)
var nextGreaterElement = function(nums1, nums2) {

	// using map to store the closest greater element on the right for each `num`
    const map = new Map();
	
	// using stack to keep track of the decreasing subsequence (3, 2, 1, 4)
	// when num > stack.top(), we pop all the elements and set the closest greater element on the right for them as `num`
    const stack = [];
    
    // O(n)
    nums2.forEach(num => {
        while(stack.length && stack[stack.length - 1] < num) {  // if stack is not empty, then compare the top element with num
            map.set(stack.pop(), num);                          // if num is greater than the top element, add it to the map, and set the next greater element for the top element as `num`
        }
        stack.push(num);                                        // add num to stack to find it's next greater element
    })
    
    // O(m) ~ O(n)
	// if map has the num, we got the closest greater element on the right for that num
	// else we did not and set -1 for that num
    return nums1.map(num => map.has(num) ? map.get(num) : -1);
}
/* Time Complexity = O(m + n) ~ O(n) (since 0 < m <= n)
Space Complexity = O(n)

Dry Run

3   4   5   1   0   2   6

stack -> 3 -> 4 -> 5 1 0 -> 5 2

map -> 3:4, 4:5, 0:2, 1:2, 2:6, 5:6, 6:6

=> 4   5   6   2   2   6   -1

---------------------------------------

3   4   5   1   0   2

stack -> 3 -> 4 -> 5 1 0 -> 5 2

map -> 3:4, 4:5, 0:2, 1:2

=> 4 5 -1 2 2 -1
Solution 2: */

// TC = O(n + mn) ~ O(mn); SC = O(n) (m ~ n)
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map();
    nums2.forEach((num, idx) => map.set(num, idx));
    
    return nums1.map(num => {
        let idx = map.get(num) + 1;
        while(nums2[idx] < num) {
            ++idx;
        }
        if(idx === nums2.length) {
            return -1;
        }
        return nums2[idx];
    })
};
/* Time Complexity = O(n + m * n) ~ O(m * n) ~ O(n^2) (since 0 < m <= n)
Space Complexity = O(n) (using Map to store indices) */

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))