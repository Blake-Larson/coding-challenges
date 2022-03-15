// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

//P: string

//R: an array of two strings

function capitalize(s) {
	const evens = s
		.split('')
		.map((el, i) => (i % 2 === 0 ? el.toUpperCase() : el))
		.join('');
	const odds = s
		.split('')
		.map((el, i) => (i % 2 !== 0 ? el.toUpperCase() : el))
		.join('');
	return [evens, odds];
}

//E:
capitalize('abcdef'); // = ['AbCdEf', 'aBcDeF']
