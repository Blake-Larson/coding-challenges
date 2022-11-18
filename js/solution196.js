// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
	//split into array
	let strArr = string.split(' ');
	//map through and reverse items if they are over 5 characters
	return strArr
		.map(el => (el.length >= 5 ? el.split('').reverse().join('') : el))
		.join(' ');
}

console.log(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
console.log(spinWords('This is a test'), 'This is a test');
console.log(spinWords('This is another test'), 'This is rehtona test');
