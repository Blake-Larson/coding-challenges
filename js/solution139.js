// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

//P: string

//R: Boolean

function isPalindrome(line) {
	let lineArr = line.toString().split('');
	if (lineArr.length % 2 !== 0) {
		lineArr.splice(Math.floor(lineArr.length / 2), 1);
	}
	let first = lineArr
		.slice(0, Math.floor(lineArr.length / 2))
		.reverse()
		.join('');
	let second = lineArr.slice(lineArr.length / 2).join('');

	return first === second;
}

isPalindrome('anna'); // ==> true
isPalindrome('walter'); // ==> false
isPalindrome(12321); // ==> true
isPalindrome(123456); // ==> false
