// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//valid array, always numbers, whole,

//return it as an array

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(arr) {
	//create a new array with the odd sorted numbers
	let odds = arr.filter(el => el % 2);

	let sortedOdds = odds.sort((a, b) => a - b);

	//map through arr and replace with the odd sorted numbers

	return arr.map(el => {
		if (el % 2 === 0) {
			return el;
		} else {
			sortedOdds.shift();
			return el;
		}
	});
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
