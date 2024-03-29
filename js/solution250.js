// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// always an array always 10 integers

// return as a string in the right format

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

function createPhoneNumber(arr) {
	//use a template literal and access array values

	return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}

console.log(
	createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
	'(123) 456-7890'
);
console.log(
	createPhoneNumber([5, 2, 3, 3, 1, 1, 7, 3, 9, 4]),
	'(523) 311-7394'
);
