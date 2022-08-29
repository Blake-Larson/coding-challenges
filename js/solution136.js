// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//P: string with some numbers

//R: string

//doesn't work in Codewars
function correct(string) {
	return string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I');
}
//works on codewars
function correct(string) {
	return string
		.split('')
		.map(el => {
			if (el === '5') return 'S';
			if (el === '0') return 'O';
			if (el === '1') return 'I';
			return el;
		})
		.join('');
}

//Examples:

correct('L0ND0N'); //"LONDON"
correct('DUBL1N'); //"DUBLIN"
correct('51NGAP0RE'); //"SINGAPORE"
correct('BUDAPE5T'); //"BUDAPEST"
correct('PAR15'); //"PARIS"
