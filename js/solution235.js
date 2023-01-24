// Create a method to see whether the string is ALL CAPS.

// always a valid string, only english characaters,

// return as a boolean

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True

function isAllCaps(str) {
	if (str) {
		return str.split('').every(letter => letter.toUpperCase() === letter);
	} else {
		return true;
	}
}

//const isAllCaps = str => str.split('').every(letter => letter.toUpperCase() === letter)

console.log(isAllCaps('c'), false);
console.log(isAllCaps('C'), true);
console.log(isAllCaps('hello I AM DONALD'), false);
console.log(isAllCaps('HELLO I AM DONALD'), true);
console.log(isAllCaps('ACSKLDFJSgSKLDFJSKLDFJ'), false);
console.log(isAllCaps('ACSKLDFJSGSKLDFJSKLDFJ'), true);
