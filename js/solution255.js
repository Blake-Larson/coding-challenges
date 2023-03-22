// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
	// If n is not an integer, return the string "NaN".
	if (typeof num !== 'number' || isNaN(num)) {
		return 'NaN';
	}

	// If n is negative, then the negative sign should be removed.
	let validatedNum = num;
	if (Math.sign(num) === -1) {
		validatedNum = num * -1;
	}

	let numAsString = validatedNum.toString();

	let result = numAsString
		.split('')
		.map((number, i, arr) => {
			if (number % 2 !== 0 && arr[i + 1] % 2 !== 0) {
				return `-${number}`;
			} else if (number % 2 !== 0) {
				return `-${number}-`;
			} else {
				return number;
			}
		})
		.join('');

	//Trim the dashes
	if (result[0] === '-') {
		return result.slice(1);
	} else {
		return result;
	}
}

console.log(dashatize('hi'));
console.log(dashatize(NaN));
console.log(dashatize(-274));
console.log(dashatize(274));
console.log(dashatize(6815));
console.log(dashatize(3815));
