// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
	const nums = x.filter(el => typeof el === 'number');
	const strings = x.filter(el => typeof el === 'string');

	return (
		nums.reduce((a, c) => a + c, 0) - strings.reduce((a, c) => a + Number(c), 0)
	);
}
