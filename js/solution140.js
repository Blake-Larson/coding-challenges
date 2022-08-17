//Remove all numbers from the strings

//P: Strings with letters and numbers

//R: 'String'

function stringClean(s) {
	let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	return s
		.split('')
		.filter(el => !nums.includes(el))
		.join('');
}

//Examples:

stringClean('! !'); // -> '! !'
stringClean('123456789'); // -> ''
stringClean('This looks5 grea8t!'); // -> 'This looks great!'
