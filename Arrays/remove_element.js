var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};

// Logic
// Use two pointers:
// i → traverses the array.
// x → keeps track of where the next valid element should be placed.
// If nums[i] is not equal to val, copy it to nums[x] and increment x.
// Elements from index 0 to x-1 will be the final valid array.
