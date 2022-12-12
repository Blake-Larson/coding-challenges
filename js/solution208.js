// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//always a number, not negative, integer, always valid

//return digital root as a number

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//with recursion
function digitalRoot(n) {
	if (n < 10) return n;
	return digitalRoot(
		n
			.toString()
			.split('')
			.reduce((a, c) => a + Number(c), 0)
	);
}

//with while loop
// function digitalRoot(n) {
//   //make a while loop that takes in n and adds each digit together (reduce)
//   //if number !< 10 repeat

//   while (n > 9){
//     n = n.toString().split('').reduce((a, c) => a + Number(c), 0)
//   }
//   return n
// }

console.log(digitalRoot(16), 7);
console.log(digitalRoot(942), 6);
console.log(digitalRoot(132189), 6);
console.log(digitalRoot(493193), 2);
