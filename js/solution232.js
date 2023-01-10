//Replace singles with '(' and duplicates with ')'

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(str) {
	return str
		.toLowerCase()
		.split('')
		.map(el => (str.lastIndexOf(el) === str.indexOf(el) ? '(' : ')'))
		.join('');
}

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())');
console.log(duplicateEncode('(( @'), '))((');
