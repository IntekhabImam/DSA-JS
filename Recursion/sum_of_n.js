function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}
console.log(sum(5));

// Revision Notes: Sum of N Numbers Using Recursion

// Purpose: Calculate the sum of numbers from 1 to n.
// Base Case: n == 0
// Returns 0.
// Stops further recursive calls.
// Recursive Case: n + sum(n - 1)
// Adds current number n to the sum of smaller numbers.