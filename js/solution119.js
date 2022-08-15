// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
	//split words string into array of words
	let wordsArr = words.split(' ');
	let first = '';
	let second = '';
	let third = '';
	let fourth = '';
	let fifth = '';
	let sixth = '';
	let seventh = '';
	let eigth = '';
	let ninth = '';

	//find the number and set it equal to a variable of that number
	wordsArr.forEach(el => {
		if (el.includes(1)) first = el;
		if (el.includes(2)) second = el;
		if (el.includes(3)) third = el;
		if (el.includes(4)) fourth = el;
		if (el.includes(5)) fifth = el;
		if (el.includes(6)) sixth = el;
		if (el.includes(7)) seventh = el;
		if (el.includes(8)) eigth = el;
		if (el.includes(9)) ninth = el;
	});
	//template string return those in order
	let result =
		`${first} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh} ${eigth} ${ninth}`.trim();

	return result;
}

//Examples:

order('Thi1s is2 3a T4est');
order('Fo1r the2 g3ood 4of th5e pe6ople');
