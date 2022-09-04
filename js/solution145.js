// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
	return a.map(el => {
		switch (el) {
			case 97:
				return (el = 'a');
				break;
			case 101:
				return (el = 'e');
				break;
			case 105:
				return (el = 'i');
				break;
			case 111:
				return (el = 'o');
				break;
			case 117:
				return (el = 'u');
				break;
			default:
				return el;
		}
	});
}
isVow([
	118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120,
	106,
]);
