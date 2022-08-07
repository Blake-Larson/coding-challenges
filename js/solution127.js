// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

String.prototype.camelCase = function () {
	//split into words
	let wordArr = this.split(' ');
	//capitalize each first index
	return (
		wordArr
			.map(el => {
				return el
					.split('')
					.map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
					.join('');
			})
			//join without spaces
			.join('')
	);
};

//Examples
'hello case'.camelCase(); // => HelloCase
'camel case word'.camelCase(); // => CamelCaseWord
