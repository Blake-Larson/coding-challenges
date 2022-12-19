//count how many items from one array are in another array

function checkString(arr1, arr2) {
	const map = {};
	let count = 0;

	for (el of arr1) {
		map[el] = true;
	}
	for (el of arr2) {
		if (map[el]) {
			count++;
		}
	}
	return count;
}

console.log(checkString('abc', 'faalkjdsmnoinbabcijas'), 7);
console.log(checkString('test', 'faalktesnoinbabcijas'), 4);
console.log(checkString('pizza', 'Pizzajdsmnoinbabcijas'), 8);
