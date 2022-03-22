//Given a string return true if the word is a palindrome
//P: a string
//R: boolean

function isPalindrome(line) {
	let word = line.toString();
	return word === word.split('').reverse().join('');
}
