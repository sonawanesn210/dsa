const nextGreaterElement = function (n) {

    // split nums into an array
    let nums = n.toString(10).split("").map(el => Number(el))

    if (nums.length === 1) return -1

    // start with second to last number as nums[i] and work backwards
    for (let i = nums.length - 2; i >= 0; i--) {
        let j = i + 1;
        //iterate forward until you reach a number that is smaller than nums[i] or the end of nums
        for (j; j < nums.length; j++) {
            if (nums[j] > nums[i]) break;
        }
        // swap that found first smaller number or last number from above with nums[i]
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        // bubble up the one now after nums[i] (unless nums only has a length of 2, then you don't need to)
        for (let k = i + 1; k < nums.length - 1; k++) {
            if (nums.length === 2) break;
            if (nums[k] > nums[k + 1]) {
                let temp = nums[k];
                nums[k] = nums[k + 1];
                nums[k + 1] = temp;
            }
        }
        // finish as soon as you have a number that's bigger than n and not bigger than 2^31
        let newN = parseInt(nums.join(""))
        if (newN > n) return newN > Math.pow(2, 31) ? -1 : newN;
    }
    // if you never find one that fits that criteria, return -1
    return -1
};


console.log(nextGreaterElement(21));