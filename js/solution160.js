// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

//P: possibly anything? only take in arrays

//R: a sum of the array and any nested arrays

function arraySum(arr) {
	return arr
		.filter(el => typeof el === 'number' || Array.isArray(el))
		.reduce((acc, c) => (c.length > 1 ? acc + arraySum(c) : (acc += c)), 0);
}

arraySum([1, 2]); // 3
arraySum([1, 2, 3]); // 6
arraySum([1, 2, [1, 2]]); //6
