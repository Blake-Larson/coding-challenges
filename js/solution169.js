//remove the spaces from the string and return that new string

//always string, not empty, always letters, no nums or specials, no funny biz

//plain string returned

//"hello world" -> "helloworld"
//"a b c d e" -> "abcde"
//"bob" -> "bob"

const removeSpaces = str =>
	str
		.split('')
		.filter(letter => letter !== ' ')
		.join('');

console.log(removeSpaces('hello world'), 'helloworld');
console.log(removeSpaces('a b c d e'), 'abcde');
console.log(removeSpaces('bob'), 'bob');

// function removeSpaces(str) {
//   return str.split('').filter(letter => letter !== ' ').join('')
// }
