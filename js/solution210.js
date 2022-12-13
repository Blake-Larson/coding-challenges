// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// always integers, always valid

// return as a boolean

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

//Using a hasmap
function duplicates(arr) {
	//use hashmap to log all items from the array
	const map = {};
	let result = false;

	for (let el of arr) {
		map[el] ? (result = true) : (map[el] = 1);
	}
	return result;
}

//using a Set
// function duplicates(arr){
//   // create a set from the array
//   let nums = new Set(arr)

//   //if length of set === array then no duplicates
//   return arr.length !== nums.size

// }
//or
//const duplicates = arr => arr.length !== new Set(arr).size

console.log(duplicates([1, 2, 3, 1]), true);
console.log(duplicates([1, 2, 3, 4]), false);
console.log(duplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
