// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//P: given a string, always a valid string

//R: boolean true or false

function isPangram(string) {
	//declare alphabet array
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	//if letter is in alphabet array then take that letter out of alphabet
	string
		.toLowerCase()
		.split('')
		.forEach(el =>
			alphabet.includes(el) ? alphabet.splice(alphabet.indexOf(el), 1) : null
		);

	//if alphabet array is 0 then return true

	return alphabet.length === 0 ? true : false;
}

//Example:
isPangram('The quick brown fox jumps over the lazy dog.'); //true
isPangram('This is not a pangram.'); //false
