var findKthLargest = function(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1 - (k - 1)];
  };

  console.log(findKthLargest([3,2,1,5,6,4],2));

  /* var findKthLargest = function(arr, k) {
    arr.sort((a, b) => b-a);
    return arr[k-1];
  };

  console.log(findKthLargest([3,2,1,5,6,4],2)); */