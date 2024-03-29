// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

const { arrayBuffer } = require('stream/consumers');

//given a string, can have specials, not empty, Can have caps

//return a string with the replacements

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function replaceString(str) {
// 	//split string into array
// 	arr = str.toLowerCase().split('');

// 	//map -> if its not a duplicate = "(", or if it is a duplicate = ")"
// 	arr = arr.map((el, i, arr) => {
// 		if (arr.indexOf(el) === arr.lastIndexOf(el)) {
// 			return '(';
// 		} else {
// 			return ')';
// 		}
// 	});

// 	//join back into a string
// 	return arr.join('');
// }

const replaceString = str =>
	str
		.toLowerCase()
		.split('')
		.map((el, i, arr) => (arr.indexOf(el) === arr.lastIndexOf(el) ? '(' : ')'))
		.join('');

console.log(replaceString('din'), '(((');
console.log(replaceString('recede'), '()()()');
console.log(replaceString('Success'), ')())())');
console.log(replaceString('(( @'), '))((');
