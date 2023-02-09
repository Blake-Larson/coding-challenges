// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//always a string, could be empty string, handle capitals,

// return a new string with the right replacements

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
	//handle empty string
	if (!word) return '';

	// make lowercase and split into array
	let arr = word.toLowerCase().split('');

	// map through items, determine if duplicate, replace with symbol, join into string
	return arr
		.map((letter, i) =>
			arr.indexOf(letter) !== arr.lastIndexOf(letter) ? ')' : '('
		)
		.join('');
}

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())');
console.log(duplicateEncode('(( @'), '))((');
