// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// only string and number data types, conver to string, always valid no blanks, could have spaces

// return as a boolean

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false

function isPalindrome(str) {
	//convert to string
	let word = str.toString().split('');

	//check if word === reverse of word
	return word.join('') === [...word].reverse().join('');
}

console.log(isPalindrome('anna'), true);
console.log(isPalindrome('walter'), false);
console.log(isPalindrome(12321), true);
console.log(isPalindrome(123456), false);
