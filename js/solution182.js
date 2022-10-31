// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// array of integer nums, never empty, always have one solution
// given a target that I want two numbers to equal

//return an array of indecies [0,1]

// ([2,7,11,15], 9) -> [0,1]
// ([3,2,4], 6) -> [1,2]
// ([3,3], 6) -> [0,1]

function twoSum(arr, target) {
	//loop , current element + element if equal to target return the indecies of those items

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				return [i, j];
			}
		}
	}
}

console.log(twoSum([2, 7, 11, 15], 9), [0, 1]);
console.log(twoSum([3, 2, 4], 6), [1, 2]);
console.log(twoSum([3, 3], 6), [0, 1]);
