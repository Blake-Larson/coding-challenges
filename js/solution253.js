// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

function capitals(word) {
	const indexes = [];
	word
		.split('')
		.forEach((letter, i) =>
			letter.toUpperCase() === letter ? indexes.push(i) : null
		);
	return indexes;
}

// Example
console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
