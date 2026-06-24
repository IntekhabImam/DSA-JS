let arr = [4, 5, 3, 6, 7];

function sum(n) {
    if (n == 0) return arr[0];
    return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));


// Short Revision Note
// Recursively finds the sum of all array elements.
// Base case: n == 0, return first element.
// Recursive case: add current element to the sum of previous elements.