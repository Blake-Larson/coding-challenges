// //You will be given an array of numbers in which two numbers occur once, and the rest, occur twice. Return the sum of the nubmers that only occur once.

//always a valid array of numbers, no floats, no negatives, 2 occur once, all else occur twice

//return as a number

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr) {
	//sort the array, filter out the numbers that only occur once.
	//[4,4,5,6]  // sum and return
	return arr
		.sort((a, b) => a - b)
		.filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el))
		.reduce((a, c) => a + c, 0);
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
