// Given an array of numbers, return all pairs that add up to a given sum.

function twoSum(arr, sum) {
	const map = {};
	let pairs = [];

	for (let num1 of arr) {
		let num2 = sum - num1;
		if (map[num2]) {
			pairs.push([num1, num2]);
		} else {
			map[num1] = 1;
		}
	}
	return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [
	[2, 2],
	[3, 1],
]);
