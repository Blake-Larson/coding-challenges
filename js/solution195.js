// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(num) {
	if (num < 0) {
		return 0;
	} else {
		let sum = 0;
		//for loop from 0 to num to check if multiple, add to array if yes
		for (let i = 0; i < num; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				sum += i;
			} else if (i % 3 === 0 || i % 5 === 0) {
				sum += i;
			}
		}
		return sum;
	}
}
