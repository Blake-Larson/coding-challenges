//Given a string, return a new string that has transformed based on the input:
//Change case of every character and reverse the order of the words
//Can have multiple spaces and leading/trailing spaces.

//Never empty string, always valid, only enlgish alphabet and spaces, multiple spaces, leading/trailing spaces.

//returned as a string

//"Example Input" ==> "iNPUT eXAMPLE"
//" This is A test" ==> "TEST a IS tHIS"
//"Avatar Ang" ==> "aNG aVATAR"

// function stringTransformer(str) {
//   // split into array
//   arr = str.split('')

//   //map if el is === to el.toLowerCase() ? el : el.toUpperCase()
//   arr = arr.map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase())

//   //join it to a string
//   str = arr.join('')

//   // split into words
//   arr = str.split(' ')

//   //arr.reverse
//   arr = arr.reverse()

//   // join and return
//   return arr.join(' ')

// }

// function stringTransformer(str) {
//   return str
//     .split('')
//     .map(el => el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase())
//     .join('')
//     .split(' ')
//     .reverse()
//     .join(' ')
// }

const stringTransformer = str =>
	str
		.split('')
		.map(el => (el === el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()))
		.join('')
		.split(' ')
		.reverse()
		.join(' ');

console.log(stringTransformer('Example Input'), 'iNPUT eXAMPLE');
console.log(stringTransformer(' This is A test'), 'TEST a IS tHIS');
console.log(stringTransformer('Avatar Ang'), 'aNG aVATAR');
