let arr = [3, 5, 6, 4, 8];

function oddSum(n) {

    let isOdd = (arr[n] % 2) !== 0;

    if (n == 0) {
        return isOdd ? arr[n] : 0;
    }

    return (isOdd ? arr[n] : 0) + oddSum(n - 1);
}

console.log("Answer =", oddSum(arr.length - 1));


// Short Revision Note

// Checks if the current element is odd using:

// arr[n] % 2 !== 0
// If odd, add it to the sum.
// If even, add 0.
// Recursively call oddSum(n - 1) for remaining elements.
// Base case: when n === 0, return the first element if it's odd, otherwise 0.

// Formula:

// current odd value + oddSum(n - 1)

// Time Complexity: O(n)
// Space Complexity: O(n) (recursion stack)