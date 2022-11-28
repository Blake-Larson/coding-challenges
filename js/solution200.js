// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// Strings will be lowercase only, no spaces, always valid string

//return as an array

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

// function dup(arr) {
//   //loop through array
//   return arr.map(el => {
//     //split string and filter el !== next item in string
//     return el.split('').filter((el, i, arr) => el !== arr[i + 1]).join('')
//   })
// }

const dup = arr =>
	arr.map(el =>
		el
			.split('')
			.filter((el, i, arr) => el !== arr[i + 1])
			.join('')
	);

console.log(dup(['abracadabra', 'allottee', 'assessee']), [
	'abracadabra',
	'alote',
	'asese',
]);
console.log(dup(['kelless', 'keenness']), ['keles', 'kenes']);
console.log(
	dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']),
	['codewars', 'picaniny', 'hubububo']
);
