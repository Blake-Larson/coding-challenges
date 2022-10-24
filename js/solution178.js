//Find the duplicate items in a string

//always a string , never empty, can have specials nums letters, 1 word, can be caps

//return a string of the duplicate items, only one iteration of that character return as lowercase

// 'aabbccdde' -> 'abcd'
//'12asd32as5' -> '2as'
// 'piZZa' -> 'zz'

// function findDuplicates(str){
//   //split the str into an array

//   let strArr = str.toLowerCase().split('')

//   //filter, index of the character !== current index && lastIndexOf character === current index
//   let filteredArr = strArr.filter((el,i, arr) => arr.indexOf(el) !== i && arr.lastIndexOf(el) === i)

//   //join back into a string

//   return filteredArr.join('')

// }

const findDuplicates = str =>
	str
		.toLowerCase()
		.split('')
		.filter((el, i, arr) => arr.indexOf(el) !== i && arr.lastIndexOf(el) === i)
		.join('');

console.log(findDuplicates('aabbccdde'), 'abcd');
console.log(findDuplicates('12asd32as5'), '2as');
console.log(findDuplicates('piZZa'), 'z');
