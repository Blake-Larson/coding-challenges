// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

//non-negative integer, always valid number

//return n! as a number

//factorial(5), 120
//factorial(6), 720

function factorial(num) {
	if (num < 2) {
		return 1;
	}
	return num * factorial(num - 1);
}

console.log(factorial(5), 120);
console.log(factorial(6), 720);

// 5 * factorial(5 - 1)
//   4 * factorial(4 - 1)
//     3 * factorial(3 - 1)
//       2 * factorial(2 - 1)
