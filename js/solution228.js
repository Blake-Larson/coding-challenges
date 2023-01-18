//TWO SUM: Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

//always array, whole integers,

//return array of arrays, pairs as numbers

// twoSum([1,2,2,3,4], 4), [[2,2], [1,3]]
// twoSum([4,2,4,6,3,5,1], 8), [[4,4], [3,5], [2,6]]

function twoSum(arr, sum) {
	//use a hashmap to store all numbers
	const map = {};
	let pairs = [];
	//loop through map, find pairs by subtracting num1 from sum to get num2
	//if num2 is in map, return pair
	for (num1 of arr) {
		let num2 = sum - num1;
		if (map[num2]) {
			pairs.push([num1, num2]);
		} else {
			//else add num1 to map
			map[num1] = true;
		}
	}
	return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [
	[2, 2],
	[1, 3],
]);
console.log(twoSum([4, 2, 4, 6, 3, 5, 1], 8), [
	[4, 4],
	[3, 5],
	[2, 6],
]);
