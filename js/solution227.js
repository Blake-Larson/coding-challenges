//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//always a valid array of numbers, positive, whole

//return an array

// sortOdds([1,2,3,4,5,6,7,8,9,10]), [1,2,3,4,5,6,7,8,9,10]
// sortOdds([2,6,3,1,5]), [2,6,1,3,5]
// sortOdds([7,5,9,2,4]), [5,7,9,2,4]

function sortOdds(arr) {
	let odds = arr.filter(el => el % 2 !== 0).sort((a, b) => b - a);
	return arr.map(num => (num % 2 !== 0 ? odds.pop() : num));
}

console.log(
	sortOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);
console.log(sortOdds([2, 6, 3, 1, 5]), [2, 6, 1, 3, 5]);
console.log(sortOdds([7, 5, 9, 2, 4]), [5, 7, 9, 2, 4]);
