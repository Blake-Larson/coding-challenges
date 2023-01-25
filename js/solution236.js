// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// always valid string, only lower case, one word,

// return as a number

function getCount(str) {
	// declare a map to hold vowels
	const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
	let count = 0;

	// iterate through str and if it exists in map, add 1 to it.

	let strArr = str.split('');

	for (letter of strArr) {
		if (vowels[letter]) {
			count++;
		}
	}
	return count;
}

console.log(getCount('aeiou'), 5);
console.log(getCount('Blake'), 2);
console.log(getCount('Taylor'), 2);
