//Count how many items from arr A are in arr B

function findItems(arrA, arrB) {
	const map = {},
		items = {};

	for (el of arrB) {
		map[el] = map[el] + 1 || 1;
	}
	for (el of arrA) {
		if (map[el]) {
			items[el] = items[el] + 1 || 1;
		}
	}
	return Object.keys(items).length;
}

console.log(findItems(['a', 'b', 'c', 'd'], ['a', 'b', 'c', 'd', 'e']), 4);
