//Merge two arrays together

//P: two arrays of numbers

//R: one array sorted low to high with no duplicates

function mergeArrays(arr1, arr2) {
	//merge arrays
	let merged = arr1.concat(arr2);
	//sort arrays
	let sorted = merged.sort((a, b) => a - b);
	//remove duplicates
	result = sorted.filter((el, i, arr) => el !== arr[i - 1]);
	return result;
}

mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]); // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
