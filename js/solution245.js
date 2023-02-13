// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

//taking in a string

//return a string

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
	let words = str.replaceAll('-', ' ').replaceAll('_', ' ').split(' ');

	return words
		.map((word, i) => {
			if (i === 0) {
				return word;
			} else if (word[0].toUpperCase() === word[0]) {
				return word;
			} else {
				return word[0].toUpperCase() + word.slice(1, word.length);
			}
		})
		.join('');
}

// function toCamelCase(str){
//     let arr = str.split('');
//     for(i = 0; i < arr.length; i++){
//       let letter = arr[i];
//       if(letter == '_' || letter == '-') {
//         arr[i + 1] = arr[i + 1].toUpperCase();
//         arr[i] = '';
//       }
//     }
//     return arr.join('');
//   }

console.log(toCamelCase('the-stealth-warrior'), 'theStealthWarrior');
console.log(toCamelCase('The_Stealth_Warrior'), 'TheStealthWarrior');
