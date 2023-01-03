//Two Sum: Given an array of numbers, return all pairs that add up to a given sum.

//always a valid array, only numbers, only positive whole integers.

//sum, always a number, positive whole number

//twoSum([1, 2, 2, 3, 4], 4), [[2, 2],[3, 1],]

function twoSum(arr, sum) {
	//create a map to store numbers from the arr
	//create an arr to store the pairs
	const map = {};
	const pairs = [];

	//loop through arr, sum - num1 = num2
	for (let num1 of arr) {
		let num2 = sum - num1;
		//check if num2 is in the map, push both nums to pairs
		if (map[num2]) {
			pairs.push([num1, num2]);
		} else {
			map[num1] = true;
		}
	}
	return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4], 4), [
	[2, 2],
	[3, 1],
]);
