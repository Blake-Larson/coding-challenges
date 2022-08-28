// Split a given string into different strings of equal size

//P: string, length of each string

//R: string

function splitInParts(s, partLength) {
	let result = [];
	for (let x = 0; x < s.length; x += partLength) {
		let str = [];
		for (let i = 0; i < partLength; i++) {
			str.push(s[x + i]);
		}
		result.push(str.join(''));
	}
	return result.join(' ');
}

//Examples:
splitInParts('supercalifragilisticexpialidocious', 3); // "sup erc ali fra gil ist ice xpi ali doc iou s")
splitInParts('HelloKata', 1); // "H e l l o K a t a")
splitInParts('HelloKata', 9); // "HelloKata")
