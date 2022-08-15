// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
	//make alphabet array
	let alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];

	xArr = x.split(' ');

	//find index of el in array and return the value for each letter
	let scoreArr = xArr.map((word, i) => {
		wordArr = word.split('');
		//for each word add all letters together
		return (word = wordArr.reduce(
			(acc, letter) => acc + alphabet.indexOf(letter) + 1,
			0
		));
	});
	//return the word with the highest score
	return xArr[scoreArr.indexOf(Math.max(...scoreArr))];
}

high('man i need a taxi up to ubud'); // 'taxi';
high('what time are we climbing up the volcano'); // 'volcano';
high('take me to semynak'); // 'semynak';
