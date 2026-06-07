var removeDuplicates = function(nums) {
    let x = 0;

    for(let i =0; i < nums.length; i++){
        if(nums[i] > nums[x]){
            x = x+1;
            nums[x] = nums[i];
        }
    }
    return x+1;
};


//Since the array is sorted, I use two pointers. One pointer tracks the last unique element, and the other scans the array. When a new unique value is found, I place it next to the previous unique value and return the count of unique elements.