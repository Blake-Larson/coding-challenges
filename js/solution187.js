// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// given two arrays, arrayTwo contains items to be removed by arrayOne
// only numbers, positive, whole numbers

// return the remainder of the 1st array

// function arrayDiff(arr, key) {
//   // if item from arr is in key, remove it
//   return arr.filter(el => !key.includes(el))
// }
const arrayDiff = (arr, key) => arr.filter(el => !key.includes(el));

console.log(arrayDiff([1, 2], [1]), [2]);
// If a value is present in b, all of its occurrences must be removed from the other:

console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3]);

console.log(arrayDiff([], [4, 5]), []);

console.log(arrayDiff([3, 4], [3]), [4]);

console.log(arrayDiff([1, 8, 2], []), [1, 8, 2]);
