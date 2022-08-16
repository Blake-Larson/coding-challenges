//Create a method to see whether the string is ALL CAPS.

//P: valid string

//R: method

String.prototype.isUpperCase = function () {
	return this.split('').every(el => el === el.toUpperCase());
};

//examples

'hello'.isUpperCase(); // false
'Hello'.isUpperCase(); // false
'HELLO'.isUpperCase(); // true

//Better

String.prototype.isUpperCase = function () {
	return this === this.toUpperCase();
};
