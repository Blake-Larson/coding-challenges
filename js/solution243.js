// You will be given an array of numbers.You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// not empty, valid array, only numbers

// returned as an array

//   Examples
// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortOdds(arr) {
	//loop through and find odds
	let odds = arr.filter(num => num % 2 !== 0);

	//sort odds
	odds = odds.sort((a, b) => b - a);

	//map through OG arr and replace odds
	return arr.map(num => (num % 2 !== 0 ? odds.pop() : num));
}

console.log(sortOdds([7, 1]), [1, 7]);
console.log(sortOdds([5, 8, 6, 3, 4]), [3, 8, 6, 5, 4]);
console.log(
	sortOdds([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]),
	[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
);
