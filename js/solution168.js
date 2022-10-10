//https://blog.barbaralaw.me/huntober-2022-day-1

function fixString(str) {
	numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	letters = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];

	const key = {
		0: 'O',
		1: 'I',
		2: 'Z',
		3: 'E',
		4: 'h',
		5: 'S',
		6: 'G',
		7: 'L',
		8: 'B',
		9: 'q',
		O: 0,
		I: 1,
		Z: 2,
		E: 3,
		h: 4,
		S: 5,
		G: 6,
		L: 7,
		B: 8,
		q: 9,
	};

	let result = str
		.split('')
		.map(el => (key[el] ? key[el] : el))
		.join('');

	console.log(result);
}

fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."); // "PRO-TIP #498: IT'S NICE TO SAY HELLO."
