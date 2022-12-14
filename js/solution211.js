// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// always valid array, integers, positive, only nums

//return majority element as a number

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majority(nums) {
	//create a map that counts the number of times an element occurs
	let map = {},
		majorityNum;

	for (num of nums) {
		map[num] = map[num] + 1 || 1;
	}

	//see which elements value is more than n/2
	for (el in map) {
		if (map[el] > nums.length / 2) {
			majorityNum = el;
		}
	}
	return majorityNum;
}

console.log(majority([3, 2, 3]), 3);
console.log(majority([2, 2, 1, 1, 1, 2, 2]), 2);
