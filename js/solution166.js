//Determine if the string is uppercase

//P: A string

//R: A boolean

String.prototype.isUpperCase = function () {
	return this.split('').every(el => el == el.toUpperCase());
};
