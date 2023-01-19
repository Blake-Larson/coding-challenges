//Given an array of numbers, sort the odd numbers while leaving the even numbers in their orignal positions

// always valid array with whole numbers,

// return the same array correctly sorted

// sortOdds([1,2,3,4,5,6]) [1,2,3,4,5,6]
// sortOdds([6,3,2,5,5,2,1]) [6,1,2,3,5,2,5]
// sortOdds([3,9,7,4,2]) [3,7,9,4,2]

function sortOdds(arr) {
	// pull out odds and sort them, with filter
	let sortedOdds = arr.filter(num => num % 2 !== 0).sort((a, b) => b - a);

	// map through arr and replace odd numbers with their sorted equal
	return arr.map(num => (num % 2 !== 0 ? sortedOdds.pop() : num));
}

console.log(sortOdds([1, 2, 3, 4, 5, 6]), [1, 2, 3, 4, 5, 6]);
console.log(sortOdds([6, 3, 2, 5, 5, 2, 1]), [6, 1, 2, 3, 5, 2, 5]);
console.log(sortOdds([3, 9, 7, 4, 2]), [3, 7, 9, 4, 2]);
