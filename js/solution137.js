// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
	if (size % 2 === 0) {
		return new Array(size / 2).fill('10').join('');
	} else {
		let result = new Array((size - 1) / 2).fill('10');
		result.push('1');
		return result.join('');
	}
}
stringy(6);
stringy(9);
stringy(3);
