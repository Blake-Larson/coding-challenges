//https://blog.barbaralaw.me/huntober-2022-day-1

function fixString(str) {
	strArr = str.split('');

	numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	letters = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q'];

	let result = strArr
		.map(el => (numbers.includes(el) ? letters[numbers.indexOf(el)] : el))
		.join('');

	console.log(result);
}

fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."); // "PRO-TIP #498: IT'S NICE TO SAY HELLO."
