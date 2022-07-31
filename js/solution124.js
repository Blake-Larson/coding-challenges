//P You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//R: an array with the odds sorted but evens in the same place.

function sortArray(array) {
	let oddArr = [];

	// foreach if even null if odd push to another array.
	array.forEach(el => (el % 2 === 0 ? el : oddArr.push(el)));

	//sort odd array
	oddArr.sort((a, b) => a - b);
	//map if even, skip, if odd insert one from odd array then remove one from odd array.

	let result = array.map(el => {
		if (el % 2 === 0) {
			return el;
		} else {
			el = oddArr[0];
			oddArr.splice(0, 1);
			return el;
		}
	});
	return result;
}

// Examples
sortArray([7, 1]); //  =>  [1, 7]
sortArray([5, 8, 6, 3, 4]); //  =>  [3, 8, 6, 5, 4]
sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]); //  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//refactored

function sortArray(array) {
	let oddArr = [];
	array.forEach(el => (el % 2 === 0 ? el : oddArr.push(el)));

	oddArr.sort((a, b) => a - b);

	return array.map(el => (el % 2 === 0 ? el : (el = oddArr.shift())));
}
