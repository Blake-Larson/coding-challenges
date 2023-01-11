//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//always a valid array of numbers, positive, whole

//return an array

// sortOdds([1,2,3,4,5,6,7,8,9,10]), [1,2,3,4,5,6,7,8,9,10]
// sortOdds([2,6,3,1,5]), [2,6,1,3,5]
// sortOdds([7,5,9,2,4]), [5,7,9,2,4]

function sortOdds(arr) {
	// create a map of the odds
	let odds = [];

	for (num of arr) {
		if (num % 2 !== 0) {
			odds.push(num);
		}
	}
	odds.sort((a, b) => b - a);
	//.map to plug the sorted odds back into the array, replacing the other odds
	return arr.map(el => {
		if (el % 2 !== 0) {
			el = odds[odds.length - 1];
			odds.pop();
		}
		return el;
	});
}

console.log(
	sortOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);
console.log(sortOdds([2, 6, 3, 1, 5]), [2, 6, 1, 3, 5]);
console.log(sortOdds([7, 5, 9, 2, 4]), [5, 7, 9, 2, 4]);
