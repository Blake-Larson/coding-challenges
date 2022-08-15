//P: takes a single string 'word'

//R: return an array of numbers representing the indexes of capital letters

function capitals(word) {
	// use foreach to iterate over each letter and push the index to a results array
	let results = [];

	let wordArr = word.split('');
	wordArr.forEach((el, i) =>
		el.toUpperCase() === el ? results.push(i) : null
	);

	return results;
}

//Examples:

capitals('HellO'); // [0,4]
capitals('CODE'); // [0,1,2,3]
capitals(''); // []
