// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

function arraySum(arr) {
	return arr.reduce((a, c) => (c.length > 1 ? a + arraySum(c) : a + c), 0);
}

console.log(arraySum([1, 2]), 3);
console.log(arraySum([1, 2, 3]), 6);
console.log(arraySum([1, 2, [1, 2]]), 6);
